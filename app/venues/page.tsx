'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  TextField,
  Typography,
  Box
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

interface PinPosition {
  id: string;
  x: number;
  y: number;
  type: string;
  image: string;
}

export default function VenuesPage() {
  const router = useRouter();
  const [pinPositions, setPinPositions] = useState<PinPosition[]>([]);

  const generateRandomPositions = () => {
    const pinTypes = [
      { type: 'hotel', image: '/images/hotelbuilding.png' },
      { type: 'wrestling match', image: '/images/wrestlingring.png' },
      { type: 'food', image: '/images/food.png' },
      { type: 'gym', image: '/images/dumbell.png' }
    ];

    // Generate 12 pins (3 of each type)
    const pins = [];
    for (let i = 0; i < 12; i++) {
      const pinType = pinTypes[i % pinTypes.length];
      pins.push({
        id: `${pinType.type}-${i}`,
        type: pinType.type,
        image: pinType.image
      });
    }

    const newPositions = pins.map(pin => ({
      ...pin,
      x: Math.random() * 80 + 10, // 10% to 90% of container width
      y: Math.random() * 70 + 15, // 15% to 85% of container height
    }));

    setPinPositions(newPositions);
  };

  useEffect(() => {
    generateRandomPositions();
  }, []);

  const handlePinClick = (pinType: string) => {
    console.log(`Clicked on ${pinType}`);
    router.push(`/venues/detailedvenue?pinType=${pinType}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* App Bar */}
      <AppBar 
        position="static" 
        elevation={0} 
        sx={{ 
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e0e0e0'
        }}
      >
        <Toolbar sx={{ minHeight: '64px' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <IconButton 
              edge="start" 
              color="inherit" 
              aria-label="back"
              sx={{ 
                color: '#000000',
                mr: 2
              }}
            >
              <ArrowBack />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      {/* Venues Wrapper */}
      <div 
        className="venues-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}
      >
        {/* Map Section */}
        <div 
          className="map-section"
          style={{ 
            width: '100%',
            maxWidth: '480px',
            position: 'relative'
          }}
        >
          <img 
            src="/images/mapview.png" 
            alt="Map" 
            style={{
              width: '100%',
              height: '60vh',
              objectFit: 'cover',
              borderRadius: 0
            }}
          />

          {/* Pins */}
          {pinPositions.map((pin) => (
            <button
              key={pin.id}
              onClick={() => handlePinClick(pin.type)}
              style={{
                position: 'absolute',
                left: `${pin.x}%`,
                top: `${pin.y}%`,
                transform: 'translate(-50%, -50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'transform 0.2s ease-in-out',
                zIndex: 10
              }}
              className="pin-button"
              onMouseEnter={(e) => {
                // Only apply hover effect on non-touch devices
                if (window.matchMedia('(hover: hover)').matches) {
                  e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (window.matchMedia('(hover: hover)').matches) {
                  e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                }
              }}
            >
              <img 
                src={pin.image} 
                alt={pin.type}
                style={{
                  width: '40px',
                  height: '40px',
                  objectFit: 'contain'
                }}
              />
            </button>
          ))}
        </div>

        {/* Bottom Panel */}
        <div 
          className="bottom-panel"
          style={{
            background: '#fff',
            width: '100%',
            maxWidth: '480px',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            marginTop: '-20px',
            boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
            padding: '16px'
          }}
        >
          {/* Search Input */}
          <TextField
            fullWidth
            placeholder="Where to?"
            variant="outlined"
            sx={{
              mb: 3,
              '& .MuiOutlinedInput-root': {
                borderRadius: '12px',
                backgroundColor: '#f8f9fa',
                '& fieldset': {
                  borderColor: '#e0e0e0',
                },
                '&:hover fieldset': {
                  borderColor: '#007AFF',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#007AFF',
                },
              },
              '& .MuiInputBase-input': {
                fontSize: '16px',
                fontWeight: '500',
                color: '#333333',
                '&::placeholder': {
                  color: '#666666',
                  opacity: 1,
                },
              },
            }}
          />

          {/* Label */}
          <Typography 
            variant="h6"
            sx={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#000000',
              textAlign: 'left'
            }}
          >
            My Wrestling Matches
          </Typography>
        </div>
      </div>
    </div>
  );
} 