'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography,
  Box,
  Button
} from '@mui/material';
import { Close } from '@mui/icons-material';


interface VenueData {
  title: string;
  address: string;
  description: string;
  phone: string;
}

function DetailedVenueContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pinType = searchParams.get('pinType');

  const getVenueData = (type: string | null): VenueData => {
    switch (type) {
      case 'gym':
        return {
          title: '24 Hour Gym',
          address: '123 Fitness Street, Downtown Area',
          description: 'A modern gym with all facilities available anytime.',
          phone: '+1 (555) 123-4567'
        };
      case 'food':
        return {
          title: 'Burger Restaurant',
          address: '456 Food Avenue, City Center',
          description: 'Delicious burgers served all day and night.',
          phone: '+1 (555) 234-5678'
        };
      case 'wrestling match':
        return {
          title: 'Wrestling Association',
          address: '789 Arena Boulevard, Sports District',
          description: 'Home for wrestling events and new wrestlers.',
          phone: '+1 (555) 345-6789'
        };
      case 'hotel':
        return {
          title: 'Hotel & Lodging',
          address: '321 Comfort Lane, Hospitality Zone',
          description: 'Comfortable stays close to the venue.',
          phone: '+1 (555) 456-7890'
        };
      default:
        return {
          title: 'Venue',
          address: 'Unknown Address',
          description: 'Venue information not available.',
          phone: '+1 (555) 000-0000'
        };
    }
  };

  const getPinImage = (type: string | null): string => {
    switch (type) {
          case 'gym':
      return '/images/dumbell.png';
    case 'food':
      return '/images/food.png';
    case 'wrestling match':
      return '/images/wrestlingring.png';
    case 'hotel':
      return '/images/hotelbuilding.png';
    default:
      return '/images/wrestlingring.png';
    }
  };

  const getButtonLabel = (type: string | null): string => {
    switch (type) {
      case 'gym':
        return 'Start workout';
      case 'food':
        return 'Order food';
      case 'wrestling match':
        return 'Join event';
      case 'hotel':
        return 'Book room';
      default:
        return 'Start location';
    }
  };

  const venueData = getVenueData(pinType);
  const pinImage = getPinImage(pinType);

  const handleClose = () => {
    router.push('/venues');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* App Bar */}
      <AppBar 
        position="sticky" 
        elevation={0} 
        sx={{ 
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e0e0e0',
          top: 0,
          zIndex: 1000
        }}
      >
        <Toolbar sx={{ minHeight: '64px', justifyContent: 'space-between' }}>
          <div style={{ width: '40px' }}></div> {/* Spacer */}
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#000000',
              fontWeight: '600'
            }}
          >
            Venue Details
          </Typography>
          <IconButton 
            onClick={handleClose}
            sx={{ 
              color: '#000000'
            }}
          >
            <Close />
          </IconButton>
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

          {/* Single Large Pin */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10
            }}
          >
            <img 
              src={pinImage} 
              alt={venueData.title}
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'contain'
              }}
            />
          </div>
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
            padding: '20px'
          }}
        >
          {/* Top Bar */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#666666', marginRight: '8px' }}>★</span>
              <Typography sx={{ color: '#666666', fontSize: '14px' }}>
                Save place
              </Typography>
            </div>
            <span style={{ color: '#666666', fontSize: '18px' }}>⋯</span>
          </div>

          {/* Venue Title */}
          <Typography 
            variant="h5"
            sx={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#000000',
              marginBottom: '8px'
            }}
          >
            {venueData.title}
          </Typography>

          {/* Address */}
          <Typography 
            sx={{
              fontSize: '16px',
              color: '#666666',
              marginBottom: '8px'
            }}
          >
            {venueData.address}
          </Typography>

          {/* Estimated Arrival */}
          <Typography 
            sx={{
              fontSize: '14px',
              color: '#666666',
              marginBottom: '16px'
            }}
          >
            Arrive at 3:07 PM and walk 2 min
          </Typography>

          {/* Status and Phone */}
          <div style={{ marginBottom: '20px' }}>
            <div style={{ 
              display: 'inline-block',
              backgroundColor: '#22C55E',
              color: '#FFFFFF',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '12px'
            }}>
              Open now 24 hrs ▶
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#007AFF', marginRight: '8px' }}>📞</span>
              <Typography 
                sx={{ 
                  color: '#007AFF', 
                  textDecoration: 'underline',
                  fontSize: '16px'
                }}
              >
                {venueData.phone}
              </Typography>
            </div>
          </div>

          {/* Opening Hours */}
          <div style={{ marginBottom: '20px' }}>
            <Typography 
              sx={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#000000',
                marginBottom: '8px'
              }}
            >
              Opening hours
            </Typography>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              fontSize: '16px',
              color: '#333333'
            }}>
              <span>Mon - Sun</span>
              <span>24 hours</span>
            </div>
          </div>

          {/* About Us */}
          <div style={{ marginBottom: '24px' }}>
            <Typography 
              sx={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#000000',
                marginBottom: '8px'
              }}
            >
              About us
            </Typography>
            <Typography 
              sx={{
                fontSize: '16px',
                color: '#333333',
                lineHeight: 1.4
              }}
            >
              {venueData.description}
            </Typography>
          </div>

          {/* Action Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: '12px'
          }}>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                borderColor: '#007AFF',
                color: '#007AFF',
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: '600',
                py: 1.5,
                borderRadius: '12px',
                '&:hover': {
                  backgroundColor: '#F0F8FF',
                  borderColor: '#0056CC'
                }
              }}
            >
              Go later
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#007AFF',
                color: '#FFFFFF',
                textTransform: 'none',
                fontSize: '16px',
                fontWeight: '600',
                py: 1.5,
                borderRadius: '12px',
                '&:hover': {
                  backgroundColor: '#0056CC'
                }
              }}
            >
              {getButtonLabel(pinType)}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DetailedVenuePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DetailedVenueContent />
    </Suspense>
  );
} 