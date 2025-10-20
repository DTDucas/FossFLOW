import { Box } from '@mui/material';
import { PROJECTED_TILE_SIZE } from 'src/config';
import { Icon } from 'src/types';
import { getIsoProjectionCss } from 'src/utils';
import { IsometricBlock } from './IsometricBlock';

interface Props {
  icon: Icon;
}

export const NonIsometricIcon = ({ icon }: Props) => {
  return (
    <Box sx={{ pointerEvents: 'none' }}>
      <Box
        sx={{
          position: 'absolute',
          left: -PROJECTED_TILE_SIZE.width / 2,
          top: -PROJECTED_TILE_SIZE.height / 2,
          transformOrigin: 'top left',
          transform: getIsoProjectionCss()
        }}
      >
        <IsometricBlock color="#FF9900" />
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box
            component="img"
            src={icon.url}
            alt={`icon-${icon.id}`}
            sx={{
              width: '60%',
              height: '60%',
              objectFit: 'contain'
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
