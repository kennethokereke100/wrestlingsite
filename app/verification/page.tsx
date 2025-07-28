'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  TextField, 
  Select, 
  MenuItem, 
  Button, 
  FormControl, 
  InputLabel,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Container
} from '@mui/material';
import { ArrowBack, Visibility, VisibilityOff, Clear } from '@mui/icons-material';
import design from '../../styles/design.json';

export default function VerificationPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: 'United States',
    phoneCode: '+1',
    phone: '',
    email: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const clearField = (field: string) => {
    setFormData(prev => ({ ...prev, [field]: '' }));
  };

  const passwordRequirements = [
    'Password should be 8-20 characters',
    'Password should have an upper case letter',
    'Password should have a lower case letter',
    'Password should have a number or acceptable character $ ! # & @ ? % = _ -'
  ];

  return (
    <div className="min-h-screen bg-white flex justify-center overflow-y-auto relative z-0">
      {/* App Bar */}
      <AppBar 
        position="static" 
        elevation={0} 
        sx={{ 
          backgroundColor: design.colors.background,
          borderBottom: `1px solid ${design.colors.border}`,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000
        }}
      >
        <Toolbar sx={{ minHeight: '64px' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <IconButton 
              edge="start" 
              color="inherit" 
              aria-label="back"
              sx={{ 
                color: design.colors.textPrimary,
                mr: design.layout.spacing.sm
              }}
            >
              <ArrowBack />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <div className="w-full flex justify-center pt-16">
        <div className="w-full max-w-md px-4 py-6">
                      <h1 className="text-2xl font-bold text-black mb-4">Join Wrestle Connect</h1>
          <p className="mb-5 text-sm text-gray-700">All fields required unless otherwise noted.</p>

          <form className="flex flex-col gap-4">
            {/* First Name and Last Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <TextField
                label="FIRST NAME"
                value={formData.firstName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('firstName', e.target.value)}
                fullWidth
                variant="standard"
                InputProps={{
                  endAdornment: formData.firstName && (
                    <InputAdornment position="end">
                      <IconButton 
                        size="small" 
                        onClick={() => clearField('firstName')}
                        sx={{ color: design.colors.textSecondary }}
                      >
                        <Clear fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiInputLabel-root': {
                    fontSize: design.typography.caption.fontSize,
                    fontWeight: design.typography.caption.fontWeight,
                    color: design.colors.textSecondary,
                    textTransform: 'uppercase',
                    fontFamily: design.typography.fontFamily
                  },
                  '& .MuiInput-root': {
                    fontSize: design.typography.bodyLarge.fontSize,
                    fontWeight: design.typography.bodyLarge.fontWeight,
                    color: design.colors.textPrimary,
                    fontFamily: design.typography.fontFamily,
                    '&:before': {
                      borderBottomColor: design.colors.border
                    },
                    '&:hover:before': {
                      borderBottomColor: design.colors.textPrimary
                    },
                    '&:after': {
                      borderBottomColor: design.colors.primary
                    }
                  }
                }}
              />
              <TextField
                label="LAST NAME"
                value={formData.lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('lastName', e.target.value)}
                fullWidth
                variant="standard"
                InputProps={{
                  endAdornment: formData.lastName && (
                    <InputAdornment position="end">
                      <IconButton 
                        size="small" 
                        onClick={() => clearField('lastName')}
                        sx={{ color: design.colors.textSecondary }}
                      >
                        <Clear fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiInputLabel-root': {
                    fontSize: design.typography.caption.fontSize,
                    fontWeight: design.typography.caption.fontWeight,
                    color: design.colors.textSecondary,
                    textTransform: 'uppercase',
                    fontFamily: design.typography.fontFamily
                  },
                  '& .MuiInput-root': {
                    fontSize: design.typography.bodyLarge.fontSize,
                    fontWeight: design.typography.bodyLarge.fontWeight,
                    color: design.colors.textPrimary,
                    fontFamily: design.typography.fontFamily,
                    '&:before': {
                      borderBottomColor: design.colors.border
                    },
                    '&:hover:before': {
                      borderBottomColor: design.colors.textPrimary
                    },
                    '&:after': {
                      borderBottomColor: design.colors.primary
                    }
                  }
                }}
              />
            </div>

            {/* Country/Region */}
            <FormControl fullWidth variant="standard">
              <InputLabel sx={{ 
                fontSize: design.typography.caption.fontSize,
                fontWeight: design.typography.caption.fontWeight,
                color: design.colors.textSecondary,
                textTransform: 'uppercase',
                fontFamily: design.typography.fontFamily
              }}>
                COUNTRY/REGION
              </InputLabel>
              <Select
                value={formData.country}
                onChange={(e: any) => handleInputChange('country', e.target.value)}
                sx={{
                  fontSize: design.typography.bodyLarge.fontSize,
                  fontWeight: design.typography.bodyLarge.fontWeight,
                  color: design.colors.textPrimary,
                  fontFamily: design.typography.fontFamily,
                  '&:before': {
                    borderBottomColor: design.colors.border
                  },
                  '&:hover:before': {
                    borderBottomColor: design.colors.textPrimary
                  },
                  '&:after': {
                    borderBottomColor: design.colors.primary
                  },
                  '& .MuiSelect-icon': {
                    color: design.colors.textSecondary
                  }
                }}
              >
                <MenuItem value="United States">United States</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
              </Select>
            </FormControl>

            {/* Mobile Phone */}
            <div className="flex gap-3 items-end">
              <FormControl variant="standard" sx={{ minWidth: 80 }}>
                <InputLabel sx={{ 
                  fontSize: design.typography.caption.fontSize,
                  fontWeight: design.typography.caption.fontWeight,
                  color: design.colors.textSecondary,
                  textTransform: 'uppercase',
                  fontFamily: design.typography.fontFamily
                }}>
                  CODE
                </InputLabel>
                <Select
                  value={formData.phoneCode}
                  onChange={(e: any) => handleInputChange('phoneCode', e.target.value)}
                  sx={{
                    fontSize: design.typography.bodyLarge.fontSize,
                    fontWeight: design.typography.bodyLarge.fontWeight,
                    color: design.colors.textPrimary,
                    fontFamily: design.typography.fontFamily,
                    '&:before': {
                      borderBottomColor: design.colors.border
                    },
                    '&:hover:before': {
                      borderBottomColor: design.colors.textPrimary
                    },
                    '&:after': {
                      borderBottomColor: design.colors.primary
                    },
                    '& .MuiSelect-icon': {
                      color: design.colors.textSecondary
                    }
                  }}
                >
                  <MenuItem value="+1">+1</MenuItem>
                  <MenuItem value="+44">+44</MenuItem>
                  <MenuItem value="+61">+61</MenuItem>
                  <MenuItem value="+86">+86</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="MOBILE PHONE (OPTIONAL)"
                value={formData.phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('phone', e.target.value)}
                fullWidth
                variant="standard"
                InputProps={{
                  endAdornment: formData.phone && (
                    <InputAdornment position="end">
                      <IconButton 
                        size="small" 
                        onClick={() => clearField('phone')}
                        sx={{ color: design.colors.textSecondary }}
                      >
                        <Clear fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiInputLabel-root': {
                    fontSize: design.typography.caption.fontSize,
                    fontWeight: design.typography.caption.fontWeight,
                    color: design.colors.textSecondary,
                    textTransform: 'uppercase',
                    fontFamily: design.typography.fontFamily
                  },
                  '& .MuiInput-root': {
                    fontSize: design.typography.bodyLarge.fontSize,
                    fontWeight: design.typography.bodyLarge.fontWeight,
                    color: design.colors.textPrimary,
                    fontFamily: design.typography.fontFamily,
                    '&:before': {
                      borderBottomColor: design.colors.border
                    },
                    '&:hover:before': {
                      borderBottomColor: design.colors.textPrimary
                    },
                    '&:after': {
                      borderBottomColor: design.colors.primary
                    }
                  }
                }}
              />
            </div>

            {/* Email Address */}
            <TextField
              label="EMAIL ADDRESS"
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('email', e.target.value)}
              fullWidth
              variant="standard"
              InputProps={{
                endAdornment: formData.email && (
                  <InputAdornment position="end">
                    <IconButton 
                      size="small" 
                      onClick={() => clearField('email')}
                      sx={{ color: design.colors.textSecondary }}
                    >
                      <Clear fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiInputLabel-root': {
                  fontSize: design.typography.caption.fontSize,
                  fontWeight: design.typography.caption.fontWeight,
                  color: design.colors.textSecondary,
                  textTransform: 'uppercase',
                  fontFamily: design.typography.fontFamily
                },
                '& .MuiInput-root': {
                  fontSize: design.typography.bodyLarge.fontSize,
                  fontWeight: design.typography.bodyLarge.fontWeight,
                  color: design.colors.textPrimary,
                  fontFamily: design.typography.fontFamily,
                  '&:before': {
                    borderBottomColor: design.colors.border
                  },
                  '&:hover:before': {
                    borderBottomColor: design.colors.textPrimary
                  },
                  '&:after': {
                    borderBottomColor: design.colors.primary
                  }
                }
              }}
            />

            {/* Password */}
            <TextField
              label="PASSWORD"
              value={formData.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange('password', e.target.value)}
              fullWidth
              variant="standard"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => setShowPassword(!showPassword)}
                      sx={{ color: design.colors.textSecondary }}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiInputLabel-root': {
                  fontSize: design.typography.caption.fontSize,
                  fontWeight: design.typography.caption.fontWeight,
                  color: design.colors.textSecondary,
                  textTransform: 'uppercase',
                  fontFamily: design.typography.fontFamily
                },
                '& .MuiInput-root': {
                  fontSize: design.typography.bodyLarge.fontSize,
                  fontWeight: design.typography.bodyLarge.fontWeight,
                  color: design.colors.textPrimary,
                  fontFamily: design.typography.fontFamily,
                  '&:before': {
                    borderBottomColor: design.colors.border
                  },
                  '&:hover:before': {
                    borderBottomColor: design.colors.textPrimary
                  },
                  '&:after': {
                    borderBottomColor: design.colors.primary
                  }
                }
              }}
            />

            {/* Password Guidelines */}
            <List dense sx={{ pl: 4, mt: 1 }}>
              {passwordRequirements.map((requirement, index) => (
                <ListItem key={index} sx={{ py: 0, px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 16, mr: 1 }}>
                    <Box 
                      component="span" 
                      sx={{ 
                        width: 4, 
                        height: 4, 
                        borderRadius: '50%', 
                        backgroundColor: design.colors.textSecondary,
                        display: 'inline-block'
                      }} 
                    />
                  </ListItemIcon>
                  <ListItemText 
                    primary={requirement}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontSize: design.typography.caption.fontSize,
                        fontWeight: design.typography.caption.fontWeight,
                        lineHeight: design.typography.caption.lineHeight / design.typography.caption.fontSize,
                        color: design.colors.textSecondary,
                        fontFamily: design.typography.fontFamily
                      }
                    }}
                  />
                </ListItem>
              ))}
            </List>

            {/* Join Button */}
            <Button
              variant="contained"
              fullWidth
              component={Link}
              href="/verification/moreverification"
              sx={{
                mt: 2,
                height: design.components.button.height,
                borderRadius: design.components.button.borderRadius,
                fontSize: design.components.button.fontSize,
                fontWeight: design.components.button.fontWeight,
                backgroundColor: design.colors.primary,
                color: design.components.button.textColor,
                textTransform: 'none',
                fontFamily: design.typography.fontFamily,
                '&:hover': {
                  backgroundColor: design.colors.primaryLight
                }
              }}
            >
              Join
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
} 