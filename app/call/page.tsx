'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography,
  Box,
  Avatar,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  Rating
} from '@mui/material';
import { ArrowBack, Phone, Search, Star } from '@mui/icons-material';
import { getImagePath } from '../../utils/imagePath';

export default function CallPage() {
  const router = useRouter();

  const handleBack = () => {
    router.push('/'); // Go back to homepage
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
        <Toolbar sx={{ minHeight: '64px' }}>
          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="back"
            onClick={handleBack}
            sx={{ 
              color: '#000000',
              mr: 2
            }}
          >
            <ArrowBack />
          </IconButton>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#000000',
              fontWeight: '600'
            }}
          >
            Contact info
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <div className="w-full flex justify-center" style={{ backgroundColor: '#f5f5f5', minHeight: 'calc(100vh - 64px)' }}>
        <div className="w-full max-w-[480px] px-4 py-6">
          {/* Profile Section */}
          <Card 
            sx={{ 
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              backgroundColor: '#ffffff',
              marginBottom: '16px'
            }}
          >
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center'
            }}>
              {/* Profile Image */}
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                border: '3px solid #333333',
                overflow: 'hidden',
                marginBottom: '16px'
              }}>
                <img 
                  src={getImagePath('/images/promoter.jpg')} 
                  alt="Promoter" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              {/* Name */}
              <Typography 
                variant="h4"
                sx={{
                  fontSize: '28px',
                  fontWeight: 'bold',
                  color: '#000000',
                  marginBottom: '8px'
                }}
              >
                Promoter
              </Typography>

              {/* Subtitle */}
              <Typography 
                sx={{
                  fontSize: '16px',
                  color: '#666666'
                }}
              >
                Promoter
              </Typography>
            </div>
          </Card>

          {/* Action Buttons Section */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <Link href="/call/texting" style={{ textDecoration: 'none' }}>
              <Card 
                sx={{ 
                  width: '120px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #e0e0e0',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  backgroundColor: '#ffffff',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#f8f9fa',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }
                }}
              >
                <CardContent sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  padding: '12px'
                }}>
                  <Phone sx={{ 
                    color: '#22C55E', 
                    fontSize: '24px',
                    marginBottom: '8px'
                  }} />
                  <Typography sx={{ 
                    fontSize: '14px',
                    color: '#333333',
                    fontWeight: '500'
                  }}>
                    Text Promoter
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </div>

          {/* Reviews Section */}
          <div style={{ 
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            {/* Reviews Title */}
            <Typography 
              variant="h5"
              sx={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#000000',
                marginBottom: '16px'
              }}
            >
              Reviews
            </Typography>

            {/* Search Bar */}
            <TextField
              fullWidth
              placeholder="Search reviews"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: '#666666' }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                marginBottom: '20px',
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
                  color: '#333333',
                  '&::placeholder': {
                    color: '#666666',
                    opacity: 1,
                  },
                },
              }}
            />

            {/* Review Card */}
            <Card 
              sx={{ 
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid #e0e0e0',
                backgroundColor: '#ffffff'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                <Avatar 
                  sx={{ 
                    width: '48px', 
                    height: '48px', 
                    marginRight: '12px',
                    backgroundColor: '#007AFF'
                  }}
                >
                  L
                </Avatar>
                <div style={{ flex: 1 }}>
                  <Typography sx={{ 
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#000000',
                    marginBottom: '4px'
                  }}>
                    Laura – New York, USA
                  </Typography>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <Rating 
                      value={5} 
                      readOnly 
                      size="small"
                      sx={{ marginRight: '8px' }}
                    />
                    <Typography sx={{ 
                      fontSize: '14px',
                      color: '#666666'
                    }}>
                      March 2025
                    </Typography>
                  </div>
                </div>
              </div>
              
              <Typography sx={{ 
                fontSize: '14px',
                color: '#333333',
                lineHeight: 1.5,
                marginBottom: '8px'
              }}>
                The promoter was excellent, very responsive and friendly. Highly recommended for organizing events.
              </Typography>
              
              <Typography sx={{ 
                fontSize: '12px',
                color: '#999999'
              }}>
                March 15, 2025
              </Typography>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 