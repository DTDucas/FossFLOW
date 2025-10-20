import { Box } from '@mui/material';
import { PROJECTED_TILE_SIZE } from 'src/config';

interface Props {
  color?: string;
}

export const IsometricBlock = ({ color = '#ccc' }: Props) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: PROJECTED_TILE_SIZE.width,
        height: PROJECTED_TILE_SIZE.height,
        transform: 'skewX(-30deg) rotate(-30deg)',
        backgroundColor: color,
        '&::before, &::after': {
          content: '""',
          position: 'absolute',
          backgroundColor: color
        },
        '&::before': {
          width: '100%',
          height: '10px',
          bottom: '-10px',
          left: '5px',
          transform: 'skewX(30deg)',
          filter: 'brightness(0.8)'
        },
        '&::after': {
          width: '10px',
          height: '100%',
          top: '5px',
          right: '-10px',
          transform: 'skewY(30deg)',
          filter: 'brightness(0.6)'
        }
      }}
    />
  );
};
