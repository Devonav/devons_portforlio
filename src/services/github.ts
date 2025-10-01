// GitHub API service for fetching contribution data
// Note: For production use, you'll need a GitHub Personal Access Token

interface GitHubContribution {
  date: string;
  count: number;
}

interface GitHubContributionsResponse {
  data: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: Array<{
            contributionDays: Array<{
              date: string;
              contributionCount: number;
            }>;
          }>;
        };
      };
    };
  };
}

export class GitHubService {
  private baseUrl = 'https://api.github.com/graphql';
  public token: string | null;

  constructor(token?: string) {
    this.token = token || null;
  }

  async fetchContributions(username: string, year: number = 2025): Promise<{
    contributions: GitHubContribution[];
    totalContributions: number;
  }> {
    console.log('GitHub service - token available:', !!this.token, 'token length:', this.token?.length);
    if (!this.token) {
      console.warn('No GitHub token provided, using mock data');
      return this.generateMockData(year);
    }

    const query = `
      query($username: String!, $from: DateTime!, $to: DateTime!) {
        user(login: $username) {
          contributionsCollection(from: $from, to: $to) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    // Fetch contributions for the specified year only
    const fromDate = new Date(year, 0, 1); // January 1st of the year
    const toDate = new Date(year, 11, 31); // December 31st of the year

    const variables = {
      username,
      from: fromDate.toISOString(),
      to: toDate.toISOString()
    };

    console.log('Making GitHub API request:', {
      username,
      from: fromDate.toISOString(),
      to: toDate.toISOString(),
      tokenPresent: !!this.token
    });

    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
      });

      console.log('GitHub API response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('GitHub API error response:', errorText);
        throw new Error(`GitHub API error: ${response.status} - ${errorText}`);
      }

      const data: GitHubContributionsResponse = await response.json();
      console.log('GitHub API raw response:', data);
      
      if (data.data?.user?.contributionsCollection) {
        const calendar = data.data.user.contributionsCollection.contributionCalendar;
        const contributions: GitHubContribution[] = [];

        // Add all contribution data for the year
        calendar.weeks.forEach(week => {
          week.contributionDays.forEach(day => {
            contributions.push({
              date: day.date,
              count: day.contributionCount
            });
          });
        });

        return {
          contributions,
          totalContributions: calendar.totalContributions
        };
      }

      throw new Error('Invalid response structure');
    } catch (error) {
      console.error('Error fetching GitHub contributions:', error);
      // Fallback to mock data
      return this.generateMockData(year);
    }
  }

  async fetchUserStats(username: string): Promise<{
    repositories: number;
    followers: number;
    following: number;
    publicRepos: number;
  }> {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }

      const data = await response.json();
      
      return {
        repositories: data.public_repos || 0,
        followers: data.followers || 0,
        following: data.following || 0,
        publicRepos: data.public_repos || 0
      };
    } catch (error) {
      console.error('Error fetching GitHub user stats:', error);
      return {
        repositories: 25,
        followers: 150,
        following: 75,
        publicRepos: 25
      };
    }
  }

  private generateMockData(year: number = 2025): {
    contributions: GitHubContribution[];
    totalContributions: number;
  } {
    const contributions: GitHubContribution[] = [];
    const startDate = new Date(year, 0, 1); // January 1st of the year
    const endDate = new Date(year, 11, 31); // December 31st of the year
    const today = new Date();
    let totalContributions = 0;

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
          // More activity on weekdays with some variation
          // Since this is 2025, show good activity for current months
          if (year === 2025 && month <= today.getMonth()) {
            count = Math.random() > 0.3 ? Math.floor(Math.random() * 12) + 1 : 0;
          } else {
            count = Math.random() > 0.5 ? Math.floor(Math.random() * 8) : 0;
          }
        }
        totalContributions += count;
      }
      
      contributions.push({
        date: d.toISOString().split('T')[0],
        count
      });
    }

    return { contributions, totalContributions };
  }
}

// Export a default instance
export const githubService = new GitHubService();

// Environment variable helper for GitHub token
export const getGitHubToken = (): string | undefined => {
  return import.meta.env.VITE_GITHUB_TOKEN;
};