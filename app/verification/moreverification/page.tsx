'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Card,
  CardContent,
  Typography,
  Box,
  Button
} from '@mui/material';
import { ArrowBack, CardMembership, ArrowForwardIos } from '@mui/icons-material';

export default function MoreVerificationPage() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleCardClick = (cardName: string) => {
    console.log(cardName);
    setIsBottomSheetOpen(true);
  };

  const handleButtonClick = (buttonLabel: string) => {
    console.log(buttonLabel);
    setIsBottomSheetOpen(false);
  };

  const handleBackdropClick = () => {
    setIsBottomSheetOpen(false);
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
          <Link href="/verification" style={{ textDecoration: 'none' }}>
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

      {/* Main Content */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[560px] px-4 py-6">
          {/* Title */}
          <Typography 
            variant="h5" 
            component="h1"
            sx={{
              fontSize: '22px',
              fontWeight: 'bold',
              color: '#000000',
              textAlign: 'left',
              mb: 1
            }}
          >
            Select your ID type
          </Typography>

          {/* Subtitle */}
          <Typography 
            variant="body1"
            sx={{
              fontSize: '16px',
              fontWeight: 'normal',
              color: '#333333',
              textAlign: 'left',
              mb: 2
            }}
          >
            We&apos;ll take 2 pictures of your ID. What ID would you like to use?
          </Typography>

          {/* ID Type Cards */}
          <div className="space-y-3">
            {/* Driver's License */}
            <Card 
              sx={{ 
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#f9f9f9'
                }
              }}
              onClick={() => handleCardClick('Driver&apos;s License')}
            >
              <CardContent sx={{ p: '12px 16px', '&:last-child': { pb: '12px' } }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CardMembership sx={{ color: '#1976d2', mr: 2 }} />
                    <div>
                      <Typography 
                        sx={{ 
                          fontWeight: 'bold',
                          color: '#000000',
                          fontSize: '16px'
                        }}
                      >
                        Driver&apos;s License
                      </Typography>
                      <Typography 
                        sx={{ 
                          color: '#777777',
                          fontSize: '14px',
                          mt: 0.5
                        }}
                      >
                        Recommended
                      </Typography>
                    </div>
                  </div>
                  <ArrowForwardIos sx={{ color: '#666666', fontSize: '16px' }} />
                </div>
              </CardContent>
            </Card>

            {/* ID Card */}
            <Card 
              sx={{ 
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#f9f9f9'
                }
              }}
              onClick={() => handleCardClick('ID Card')}
            >
              <CardContent sx={{ p: '12px 16px', '&:last-child': { pb: '12px' } }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CardMembership sx={{ color: '#1976d2', mr: 2 }} />
                    <Typography 
                      sx={{ 
                        fontWeight: 'bold',
                        color: '#000000',
                        fontSize: '16px'
                      }}
                    >
                      ID Card
                    </Typography>
                  </div>
                  <ArrowForwardIos sx={{ color: '#666666', fontSize: '16px' }} />
                </div>
              </CardContent>
            </Card>

            {/* Passport */}
            <Card 
              sx={{ 
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#f9f9f9'
                }
              }}
              onClick={() => handleCardClick('Passport')}
            >
              <CardContent sx={{ p: '12px 16px', '&:last-child': { pb: '12px' } }}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CardMembership sx={{ color: '#1976d2', mr: 2 }} />
                    <Typography 
                      sx={{ 
                        fontWeight: 'bold',
                        color: '#000000',
                        fontSize: '16px'
                      }}
                    >
                      Passport
                    </Typography>
                  </div>
                  <ArrowForwardIos sx={{ color: '#666666', fontSize: '16px' }} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Privacy Policy Box */}
          <Box 
            sx={{ 
              backgroundColor: '#f5f5f5',
              borderRadius: '8px',
              p: '12px 16px',
              mt: 2.5
            }}
          >
            <Typography 
              sx={{ 
                fontSize: '14px',
                color: '#000000',
                lineHeight: 1.4
              }}
            >
              By selecting your ID type above, you agree that we (and our service providers) can collect, use, and store your biometric information for identity verification.{' '}
              <Link 
                href="#" 
                style={{ 
                  color: '#1976d2', 
                  textDecoration: 'none',
                  fontWeight: 'normal'
                }}
              >
                Learn more in our Privacy Policy
              </Link>
              .
            </Typography>
          </Box>
        </div>
      </div>

      {/* Bottom Sheet Modal */}
      {isBottomSheetOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-end justify-center"
          onClick={handleBackdropClick}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 transition-opacity duration-300"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }}
            onClick={handleBackdropClick}
          />
          
          {/* Bottom Sheet */}
          <div 
            className="relative w-full max-w-[500px] bg-white rounded-t-2xl p-6 transform transition-transform duration-300 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title */}
            <Typography 
              variant="h6" 
              component="h2"
              sx={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#000000',
                textAlign: 'left',
                mb: 1
              }}
            >
              Wrestle Connect Would Like to Access Your Photos
            </Typography>

            {/* Subtitle */}
            <Typography 
              variant="body2"
              sx={{
                fontSize: '14px',
                color: '#666666',
                textAlign: 'left',
                mb: 4,
                lineHeight: 1.4
              }}
            >
              By allowing us access to your photos, you will be able to upload images as an avatar, server icon, and more, and you can send photos and videos to your friends and communities.
            </Typography>

            {/* Buttons */}
            <div className="space-y-3">
              <Button
                variant="text"
                fullWidth
                onClick={() => handleButtonClick('Select Photos...')}
                sx={{
                  color: '#007AFF',
                  textTransform: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: '#F0F8FF'
                  }
                }}
              >
                Select Photos...
              </Button>

              <div className="border-t border-gray-200" />

              <Button
                variant="text"
                fullWidth
                onClick={() => handleButtonClick('Allow Access to All Photos')}
                sx={{
                  color: '#007AFF',
                  textTransform: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: '#F0F8FF'
                  }
                }}
              >
                Allow Access to All Photos
              </Button>

              <div className="border-t border-gray-200" />

              <Button
                variant="text"
                fullWidth
                onClick={() => handleButtonClick('Don&apos;t Allow')}
                sx={{
                  color: '#FF3B30',
                  textTransform: 'none',
                  fontSize: '16px',
                  fontWeight: '600',
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: '#FFF5F5'
                  }
                }}
              >
                Don&apos;t Allow
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 