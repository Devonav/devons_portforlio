import React, { useState } from 'react';
import { motion } from 'motion/react';

interface TechStackProps {
  variant?: 'orbit' | 'grid' | 'spiral' | 'wave' | 'sphere';
  size?: 'small' | 'medium' | 'large';
}

// Tech stack data with SVG icons
const techStack = [
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    )
  },
  {
    name: 'Python',
    color: '#3776AB',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/>
      </svg>
    )
  },
  {
    name: 'React',
    color: '#61DAFB',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
      </svg>
    )
  },
  {
    name: 'Node.js',
    color: '#339933',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
      </svg>
    )
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/>
      </svg>
    )
  },
  {
    name: 'Java',
    color: '#ED8B00',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
      </svg>
    )
  },
  {
    name: 'C++',
    color: '#00599C',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.109-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79z"/>
      </svg>
    )
  },
  {
    name: 'Rust',
    color: '#000000',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.5841l-1.0741-.4893a10.7982 10.7982 0 00-.0653-.2859l.6898-.9593a.3462.3462 0 00-.2257-.5516l-1.1264-.2762a8.4859 8.4859 0 00-.0951-.2621l.4893-1.0741a.3462.3462 0 00-.3347-.4806l-1.1573-.0457a6.3462 6.3462 0 00-.1240-.2347l.2762-1.1264a.3462.3462 0 00-.4805-.3462l-1.0741.4893a4.1539 4.1539 0 00-.2621-.0951l.0457-1.1573a.3462.3462 0 00-.5516-.2257l-.9593.6898a2.0538 2.0538 0 00-.2859-.0653l-.2762-1.1264a.3462.3462 0 00-.5841-.1154l-.8069.8656a.9231.9231 0 00-.2936-.0283l-.6236-1.0073a.3462.3462 0 00-.6031 0l-.6236 1.0073a.9231.9231 0 00-.2936.0283l-.8069-.8656a.3462.3462 0 00-.5841.1154l-.2762 1.1264a2.0538 2.0538 0 00-.2859.0653l-.9593-.6898a.3462.3462 0 00-.5516.2257l.0457 1.1573a4.1539 4.1539 0 00-.2621.0951l-1.0741-.4893a.3462.3462 0 00-.4805.3462l.2762 1.1264a6.3462 6.3462 0 00-.1240.2347l-1.1573.0457a.3462.3462 0 00-.3347.4806l.4893 1.0741a8.4859 8.4859 0 00-.0951.2621l-1.1264.2762a.3462.3462 0 00-.2257.5516l.6898.9593a10.7982 10.7982 0 00-.0653.2859l-1.0741.4893a.3483.3483 0 00-.1154.5841l.8656.8069a13.7268 13.7268 0 00-.0283.2936l-1.0073.6236a.3462.3462 0 000 .6031l1.0073.6236a13.7268 13.7268 0 00.0283.2936l-.8656.8069a.3483.3483 0 00.1154.5841l1.0741.4893a10.7982 10.7982 0 00.0653.2859l-.6898.9593a.3462.3462 0 00.2257.5516l1.1264.2762a8.4859 8.4859 0 00.0951.2621l-.4893 1.0741a.3462.3462 0 00.3347.4806l1.1573.0457a6.3462 6.3462 0 00.1240.2347l-.2762 1.1264a.3462.3462 0 00.4805.3462l1.0741-.4893a4.1539 4.1539 0 00.2621.0951l-.0457 1.1573a.3462.3462 0 00.5516.2257l.9593-.6898a2.0538 2.0538 0 00.2859.0653l.2762 1.1264a.3462.3462 0 00.5841.1154l.8069-.8656a.9231.9231 0 00.2936.0283l.6236 1.0073a.3462.3462 0 00.6031 0l.6236-1.0073a.9231.9231 0 00.2936-.0283l.8069.8656a.3462.3462 0 00.5841-.1154l.2762-1.1264a2.0538 2.0538 0 00.2859-.0653l.9593.6898a.3462.3462 0 00.5516-.2257l-.0457-1.1573a4.1539 4.1539 0 00.2621-.0951l1.0741.4893a.3462.3462 0 00.4805-.3462l-.2762-1.1264a6.3462 6.3462 0 00.1240-.2347l1.1573-.0457a.3462.3462 0 00.3347-.4806l-.4893-1.0741a8.4859 8.4859 0 00.0951-.2621l1.1264-.2762a.3462.3462 0 00.2257-.5516l-.6898-.9593a10.7982 10.7982 0 00.0653-.2859l1.0741-.4893a.3483.3483 0 00.1154-.5841l-.8656-.8069a13.7268 13.7268 0 00.0283-.2936l1.0073-.6236a.3462.3462 0 000-.6031zM12 18.0984a6.0984 6.0984 0 116.0984-6.0984A6.0984 6.0984 0 0112 18.0984z"/>
      </svg>
    )
  },
  {
    name: 'Docker',
    color: '#2496ED',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338 0-.676.033-1.01.099-.663-1.998-2.639-2.38-2.995-2.38-.394 0-.742.04-.86.04-.4 0-.87.09-.87.09-.094.071-.3 1.204-.3 1.204-.164 1.808 1.134 2.765 1.134 2.765.03 1.117.84 2.169 1.516 2.676v4.884c0 .27.135.37.3.37s.3-.1.3-.37V13.4c.181.04.335.04.482.04 2.78 0 3.6-1.917 4.105-2.254.1 1.007.718 2.365 1.422 2.712 1.204.599 2.54-.957 2.54-.957.526-.51.976-1.424.976-1.424.246-.697-.063-1.626-.063-1.626.047-.45-.161-.973-.161-.973-.097-.76-.418-1.028-.418-1.028z"/>
      </svg>
    )
  },
  {
    name: 'AWS',
    color: '#FF9900',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335c-.072.048-.144.072-.2.072-.08 0-.16-.04-.239-.112a2.417 2.417 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.383-.591-.894-.591-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.27 0 .551.024.854.064.303.048.615.112.926.2v-.656c0-.686-.144-1.165-.423-1.444-.287-.279-.774-.415-1.491-.415-.32 0-.648.04-.99.112-.336.08-.664.184-.988.32-.144.063-.248.104-.32.128-.071.024-.12.032-.151.032-.128 0-.192-.096-.192-.287v-.454c0-.144.016-.248.056-.32.04-.071.112-.144.207-.207.32-.168.703-.31 1.147-.415.455-.112.926-.16 1.404-.16 1.068 0 1.852.24 2.36.726.504.487.765 1.205.765 2.161v2.85zm-3.24 1.213c.263 0 .535-.048.823-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.16 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.157.32-.239.216-.351.535-.351.958 0 .383.095.67.295.862.191.2.47.295.765.263zm6.124.862c-.167 0-.279-.032-.34-.087-.06-.063-.111-.183-.15-.36l-1.684-5.536c-.04-.135-.056-.224-.056-.271 0-.112.056-.168.175-.168h.718c.175 0 .295.032.351.087.064.063.111.183.151.36l1.205 4.742 1.116-4.742c.033-.176.08-.296.144-.36.064-.055.191-.087.367-.087h.583c.175 0 .302.032.367.087.063.064.11.184.143.36l1.132 4.806 1.236-4.806c.04-.176.096-.296.151-.36.064-.055.184-.087.352-.087h.678c.12 0 .184.056.184.168 0 .032-.008.072-.016.112-.008.04-.024.104-.048.2l-1.731 5.536c-.04.176-.096.296-.151.36-.064.055-.176.087-.34.087h-.622c-.175 0-.294-.032-.367-.087-.064-.064-.111-.184-.143-.36l-1.124-4.678-1.108 4.678c-.032.176-.08.296-.143.36-.064.055-.192.087-.367.087zm9.777.207c-.399 0-.79-.047-1.18-.14-.391-.096-.695-.2-.918-.32-.144-.08-.24-.168-.272-.24-.032-.08-.048-.16-.048-.248v-.471c0-.192.064-.287.184-.287.048 0 .096.008.144.032.048.016.12.048.2.08.263.112.543.2.838.264.296.063.583.096.87.096.463 0 .823-.08 1.06-.248.24-.168.367-.399.367-.694 0-.2-.063-.375-.191-.518-.127-.144-.351-.279-.67-.399l-.966-.303c-.487-.151-.838-.375-1.067-.67-.216-.295-.327-.622-.327-.966 0-.279.06-.526.175-.742.12-.216.279-.399.487-.55.207-.152.447-.256.726-.32.279-.072.566-.104.863-.104.183 0 .375.016.558.04.191.032.367.072.535.112.16.048.31.096.44.152.135.056.24.112.31.168.096.08.168.16.2.24.04.08.056.18.056.295v.447c0 .192-.063.295-.183.295-.064 0-.16-.023-.279-.08-.415-.183-.878-.271-1.388-.271-.423 0-.75.064-.966.2-.216.135-.327.34-.327.598 0 .2.071.375.207.518.144.144.375.287.718.415l.942.295c.479.152.830.367 1.05.646.216.279.327.598.327.966 0 .287-.056.543-.175.766-.112.224-.272.415-.478.575-.207.16-.455.279-.726.367-.28.096-.58.144-.902.144z"/>
      </svg>
    )
  },
  {
    name: 'Git',
    color: '#F05032',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
      </svg>
    )
  },
  {
    name: 'Flutter',
    color: '#02569B',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.159 11.871L11.91 14.456l-4.615-4.614L21.973 5.166 15.025 12.114l6.948 6.948a1.216 1.216 0 010 1.719l-6.948 6.948z"/>
      </svg>
    )
  }
];

const TechStack: React.FC<TechStackProps> = ({
  variant = 'orbit',
  size = 'medium'
}) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const sizeConfig = {
    small: { container: 'w-80 h-80', icon: 'w-8 h-8', text: 'text-xs', radius: 120 },
    medium: { container: 'w-96 h-96', icon: 'w-10 h-10', text: 'text-sm', radius: 150 },
    large: { container: 'w-[480px] h-[480px]', icon: 'w-12 h-12', text: 'text-base', radius: 180 }
  };

  const config = sizeConfig[size];

  // Mouse movement handler for sphere
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (variant === 'sphere') {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      setMousePos({ x, y });
    }
  };

  if (variant === 'sphere') {
    return (
      <div
        className={`relative ${config.container} mx-auto perspective-1000`}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
        style={{ perspective: '1000px' }}
      >
        {/* Center core */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center z-20 shadow-lg"
          animate={{
            rotateY: mousePos.x * 30 + rotation.x,
            rotateX: -mousePos.y * 30 + rotation.y,
          }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
        >
          <span className="text-white font-bold text-xs">DV</span>
        </motion.div>

        {/* 3D Sphere of tech icons */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            rotateY: mousePos.x * 20 + rotation.x,
            rotateX: -mousePos.y * 20 + rotation.y,
          }}
          transition={{ type: "spring", damping: 15, stiffness: 80 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {techStack.map((tech, index) => {
            // Calculate spherical coordinates for more even distribution
            const phi = Math.acos(1 - 2 * (index + 0.5) / techStack.length); // inclination
            const theta = Math.PI * (1 + Math.sqrt(5)) * index; // azimuth (golden angle)

            const radius = config.radius * 0.8;
            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);

            return (
              <motion.div
                key={tech.name}
                className="absolute"
                style={{
                  transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                  transformStyle: 'preserve-3d'
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotateY: -mousePos.x * 20 - rotation.x, // Counter-rotate to keep icons facing forward
                  rotateX: mousePos.y * 20 - rotation.y,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.8,
                  type: "spring",
                  damping: 15,
                  stiffness: 80
                }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <motion.div
                  className={`${config.icon} p-2 bg-white rounded-xl shadow-lg cursor-pointer relative border-2 border-gray-200`}
                  style={{
                    color: tech.color,
                    backfaceVisibility: 'hidden'
                  }}
                  whileHover={{
                    scale: 1.4,
                    backgroundColor: tech.color,
                    color: '#ffffff',
                    borderColor: tech.color,
                    zIndex: 50
                  }}
                  animate={{
                    y: Math.sin((Date.now() / 1000 + index) * 1.5) * 3,
                    rotateZ: Math.sin((Date.now() / 1000 + index) * 0.8) * 5
                  }}
                  transition={{
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotateZ: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.2 },
                    backgroundColor: { duration: 0.3 },
                    color: { duration: 0.3 }
                  }}
                >
                  {tech.icon}

                  {/* Enhanced tooltip for 3D */}
                  {hoveredTech === tech.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white ${config.text} rounded-lg whitespace-nowrap z-50 shadow-xl`}
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(50px) translateX(-50%)'
                      }}
                    >
                      {tech.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Auto-rotation animation */}
        <motion.div
          className="absolute inset-0"
          animate={{
            rotateY: 360
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          onUpdate={(latest) => {
            if (!mousePos.x && !mousePos.y) {
              setRotation(prev => ({
                x: latest.rotateY || 0,
                y: prev.y
              }));
            }
          }}
        />

        {/* Ambient sphere indicators */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-blue-300 border-opacity-20 rounded-full"
          style={{
            width: `${config.radius * 1.6}px`,
            height: `${config.radius * 1.6}px`
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-purple-300 border-opacity-15 rounded-full"
          style={{
            width: `${config.radius * 1.8}px`,
            height: `${config.radius * 1.8}px`
          }}
        />
      </div>
    );
  }

  if (variant === 'orbit') {
    return (
      <div className={`relative ${config.container} mx-auto`}>
        {/* Center logo */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[var(--tertiary)] rounded-full flex items-center justify-center z-10"
          animate={{ 
            rotate: 360,
            scale: hoveredTech ? 1.2 : 1 
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 0.3 }
          }}
        >
          <span className="text-[var(--main)] font-bold text-lg">DV</span>
        </motion.div>

        {/* Orbiting tech icons */}
        {techStack.map((tech, index) => {
          const angle = (index / techStack.length) * 2 * Math.PI;
          const radius = config.radius;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <motion.div
              key={tech.name}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
              }}
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.5
              }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <motion.div
                className={`${config.icon} p-3 bg-[var(--main)] rounded-xl shadow-lg cursor-pointer relative border-2 border-gray-200`}
                style={{ color: tech.color }}
                whileHover={{ 
                  scale: 1.4,
                  backgroundColor: tech.color,
                  color: '#ffffff',
                  borderColor: tech.color
                }}
                animate={{
                  y: Math.sin((Date.now() / 1000 + index) * 2) * 8
                }}
                transition={{ 
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 0.2 },
                  backgroundColor: { duration: 0.3 },
                  color: { duration: 0.3 }
                }}
              >
                {tech.icon}
                
                {/* Tooltip */}
                {hoveredTech === tech.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -15 }}
                    className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white ${config.text} rounded whitespace-nowrap z-50`}
                  >
                    {tech.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          );
        })}

        {/* Orbital rings */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-600 border-opacity-30 rounded-full"
          style={{ 
            width: `${config.radius * 2}px`, 
            height: `${config.radius * 2}px` 
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-gray-600 border-opacity-20 rounded-full"
          style={{ 
            width: `${config.radius * 2 + 32}px`, 
            height: `${config.radius * 2 + 32}px` 
          }}
        ></div>
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className="grid grid-cols-4 gap-6 max-w-md mx-auto">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className={`${config.icon} p-3 bg-[var(--main)] rounded-lg shadow-lg cursor-pointer relative flex items-center justify-center`}
            style={{ color: tech.color }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ 
              scale: 1.2,
              backgroundColor: tech.color,
              color: '#ffffff',
              rotateY: 180
            }}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            {tech.icon}
            
            {hoveredTech === tech.name && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: -15 }}
                className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white ${config.text} rounded whitespace-nowrap z-50`}
              >
                {tech.name}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    );
  }

  if (variant === 'spiral') {
    return (
      <div className={`relative ${config.container} mx-auto`}>
        {techStack.map((tech, index) => {
          const angle = (index / techStack.length) * 4 * Math.PI;
          const radius = 20 + (index * 8);
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <motion.div
              key={tech.name}
              className="absolute top-1/2 left-1/2"
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: [0, 360]
              }}
              transition={{ 
                delay: index * 0.2,
                duration: 0.8,
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <motion.div
                className={`${config.icon} p-2 bg-[var(--main)] rounded-lg shadow-lg cursor-pointer relative`}
                style={{ color: tech.color }}
                whileHover={{ 
                  scale: 1.3,
                  backgroundColor: tech.color,
                  color: '#ffffff'
                }}
                animate={{
                  y: Math.sin((Date.now() / 1000 + index) * 1.5) * 5
                }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {tech.icon}
                
                {hoveredTech === tech.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -15 }}
                    className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white ${config.text} rounded whitespace-nowrap z-50`}
                  >
                    {tech.name}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    );
  }

  // Wave variant
  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
      {techStack.map((tech, index) => (
        <motion.div
          key={tech.name}
          className={`${config.icon} p-3 bg-[var(--main)] rounded-lg shadow-lg cursor-pointer relative flex items-center justify-center`}
          style={{ color: tech.color }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ 
            opacity: 1, 
            y: [0, -10, 0]
          }}
          transition={{ 
            delay: index * 0.1,
            y: { 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: index * 0.2
            }
          }}
          whileHover={{ 
            scale: 1.2,
            backgroundColor: tech.color,
            color: '#ffffff',
            y: -20
          }}
          onMouseEnter={() => setHoveredTech(tech.name)}
          onMouseLeave={() => setHoveredTech(null)}
        >
          {tech.icon}
          
          {hoveredTech === tech.name && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: -15 }}
              className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white ${config.text} rounded whitespace-nowrap z-50`}
            >
              {tech.name}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;