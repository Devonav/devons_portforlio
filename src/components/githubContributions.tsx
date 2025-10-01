import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { githubService } from '../services/github';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface GitHubContributionsProps {
  username: string;
  year?: number;
}

const GitHubContributions: React.FC<GitHubContributionsProps> = ({ 
  username,
  year = 2025
}) => {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getContributionLevel = (count: number): number => {
    if (count === 0) return 0;
    if (count <= 3) return 1;
    if (count <= 6) return 2;
    if (count <= 9) return 3;
    return 4;
  };

  const getLevelColor = (level: number): string => {
    const colors = [
      '#ffffff', // Level 0 - no contributions (white for clear visibility)
      '#c8d5b9', // Level 1 - light brown/green
      '#a3b88c', // Level 2 - medium brown/green  
      '#8d6e63', // Level 3 - brown (matches tertiary)
      '#5d4037'  // Level 4 - dark brown (matches text)
    ];
    return colors[level];
  };

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Initialize GitHub service with token
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        console.log('GitHub token available:', !!token, 'Length:', token?.length);
        if (token) {
          githubService.token = token;
          console.log('Token set on service:', !!githubService.token);
        }
        
        // Fetch real GitHub data
        console.log('Fetching GitHub data for:', username, 'year:', year);
        const data = await githubService.fetchContributions(username, year);
        console.log('GitHub data received:', { 
          totalContributions: data.totalContributions, 
          contributionsCount: data.contributions.length,
          firstContribution: data.contributions[0],
          lastContribution: data.contributions[data.contributions.length - 1]
        });

        // Debug: Check for 2025 contributions specifically
        const currentMonthContributions = data.contributions.filter(c => 
          c.date.includes('2025') && c.count > 0
        );
        console.log('2025 contributions found:', currentMonthContributions.length, currentMonthContributions.slice(0, 5));
        
        const contributionsWithLevels = data.contributions.map(contrib => ({
          ...contrib,
          level: getContributionLevel(contrib.count)
        }));
        
        setContributions(contributionsWithLevels);
        setTotalContributions(data.totalContributions);
        
      } catch (err) {
        setError('Failed to fetch GitHub contributions');
        console.error('Error fetching contributions:', err);
        
        // Fallback to mock data for the specified year
        const mockData = generateMockContributions();
        setContributions(mockData.contributions);
        setTotalContributions(mockData.total);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username, year]);

  const generateMockContributions = () => {
    const contributions: ContributionDay[] = [];
    const startDate = new Date(year, 0, 1); // January 1st of the year
    const endDate = new Date(year, 11, 31); // December 31st of the year
    const today = new Date();
    let total = 0;

    // Generate contributions for the entire year
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const dayOfWeek = d.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const month = d.getMonth();
      const isFuture = d > today;
      
      let count = 0;
      
      // Only generate contributions for past/current dates
      if (!isFuture) {
        // Less activity on weekends
        if (isWeekend) {
          count = Math.random() > 0.8 ? Math.floor(Math.random() * 5) : 0;
        } else {
          // More activity on weekdays
          if (year === 2025) {
            // Show activity for the months that have passed in 2025
            count = Math.random() > 0.3 ? Math.floor(Math.random() * 12) + 1 : 0;
          } else {
            count = Math.random() > 0.5 ? Math.floor(Math.random() * 8) : 0;
          }
        }
        total += count;
      }
      
      contributions.push({
        date: d.toISOString().split('T')[0],
        count,
        level: getContributionLevel(count)
      });
    }

    return { contributions, total };
  };

  const groupByWeeks = (contributions: ContributionDay[]) => {
    const weeks: ContributionDay[][] = [];
    
    // Sort contributions by date to ensure proper order
    const sortedContributions = [...contributions].sort((a, b) => 
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    
    console.log('Grouping contributions:', {
      totalContributions: sortedContributions.length,
      firstDate: sortedContributions[0]?.date,
      lastDate: sortedContributions[sortedContributions.length - 1]?.date
    });
    
    // Create a map of date to contribution for easy lookup
    const contributionMap = new Map();
    sortedContributions.forEach(contrib => {
      contributionMap.set(contrib.date, contrib);
    });
    
    // For 2025, start from January 1st and find the Sunday before it
    const year = 2025;
    const jan1 = new Date(year, 0, 1); // January 1st, 2025
    const startDate = new Date(jan1);
    startDate.setDate(startDate.getDate() - jan1.getDay()); // Go back to Sunday
    
    // End on December 31st and find the Saturday after it
    const dec31 = new Date(year, 11, 31); // December 31st, 2025
    const endDate = new Date(dec31);
    endDate.setDate(endDate.getDate() + (6 - dec31.getDay())); // Go forward to Saturday
    
    console.log('Date range:', {
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
      jan1Day: jan1.getDay(), // 0 = Sunday, 1 = Monday, etc.
    });
    
    // Generate weeks from start to end
    let currentDate = new Date(startDate);
    let currentWeek: ContributionDay[] = [];
    
    while (currentDate <= endDate) {
      const dateString = currentDate.toISOString().split('T')[0];
      const contribution = contributionMap.get(dateString);
      
      if (contribution) {
        currentWeek.push(contribution);
      } else {
        // Empty day (outside our data range)
        currentWeek.push({ date: '', count: 0, level: 0 });
      }
      
      // If we've completed a week (7 days), add it to weeks array
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      
      // Move to next day
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    // Add any remaining days in the last week
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push({ date: '', count: 0, level: 0 });
      }
      weeks.push(currentWeek);
    }
    
    console.log('Generated weeks:', weeks.length, 'First week:', weeks[0]?.map(d => d.date || 'empty'));
    
    return weeks;
  };

  if (loading) {
    return (
      <div className="w-full p-6 border border-gray-800 rounded-lg">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-700 rounded w-48 mb-4"></div>
          <div className="grid grid-cols-53 gap-1">
            {Array.from({ length: 371 }).map((_, i) => (
              <div key={i} className="w-3 h-3 bg-gray-700 rounded-sm"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full p-6 border border-red-500 rounded-lg text-red-400">
        <p>{error}</p>
      </div>
    );
  }

  const weeks = groupByWeeks(contributions);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S']; // Single letters like GitHub

  return (
    <motion.div 
      className="w-full p-6 border border-gray-800 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">GitHub Contributions {year}</h3>
        <p className="text-sm opacity-70">
          {totalContributions} contributions in {year}
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full">
          {/* Month labels */}
          <div className="flex mb-2 gap-1" style={{ marginLeft: '28px' }}> {/* Offset for day labels */}
            {weeks.map((week, weekIndex) => {
              // Simple approach: show month label every 4-5 weeks to approximate month boundaries
              const monthsToShow = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
              const monthIndex = Math.floor(weekIndex / 4.3); // Approximate weeks per month
              const shouldShowLabel = weekIndex % Math.ceil(52 / 12) === 0 && monthIndex < 12;
              
              return (
                <div 
                  key={weekIndex} 
                  className="w-3 flex-shrink-0 text-xs opacity-60 text-center"
                  style={{ minWidth: '12px' }}
                >
                  {shouldShowLabel ? monthsToShow[monthIndex] : ''}
                </div>
              );
            })}
          </div>

          {/* Contribution grid */}
          <div className="flex gap-1">
            {/* Day labels column */}
            <div className="flex flex-col gap-1 mr-2" style={{ marginTop: '-16px' }}>
              <div className="h-3"></div> {/* Spacer for month labels */}
              {dayLabels.map((day, index) => (
                <div 
                  key={`${day}-${index}`}
                  className="h-3 text-xs opacity-60 flex items-center justify-center"
                  style={{ fontSize: '10px', width: '12px' }}
                >
                  {index === 1 || index === 3 || index === 5 ? day : ''} {/* Show M, W, F like GitHub */}
                </div>
              ))}
            </div>
            
            {/* Contribution weeks */}
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {week.map((day, dayIndex) => (
                  <motion.div
                    key={`${weekIndex}-${dayIndex}`}
                    className="w-3 h-3 rounded-sm cursor-pointer"
                    style={{ 
                      backgroundColor: day.date ? getLevelColor(day.level) : 'transparent' 
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      duration: 0.2, 
                      delay: (weekIndex * 7 + dayIndex) * 0.002 
                    }}
                    whileHover={{ 
                      scale: day.date ? 1.2 : 1,
                      transition: { duration: 0.1 }
                    }}
                    title={day.date ? 
                      `${day.date}: ${day.count} contributions (${new Date(day.date).toLocaleDateString()})` : 
                      'Empty slot'}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-4 text-xs opacity-60">
        <span>Less</span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: getLevelColor(level) }}
            />
          ))}
        </div>
        <span>More</span>
      </div>
    </motion.div>
  );
};

export default GitHubContributions;