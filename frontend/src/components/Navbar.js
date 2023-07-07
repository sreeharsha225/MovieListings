import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

import Container from '@mui/material/Container'
import { Badge } from '@mui/material'

import Tooltip from '@mui/material/Tooltip'

import ArticleIcon from '@mui/icons-material/Article'

const ResponsiveAppBar = (props) => {

  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="l">
        <Toolbar>
        <IconButton
            size="large"
            aria-label="Landing"
            color="inherit"
            href="/"
        >
          <ArticleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            // component="a"
            sx={{
              mr: 1,
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MovieListings
          </Typography>
        </IconButton>
          
          <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Tooltip title="Add Movie">
                    <IconButton
                        size="large"
                        aria-label="add movie"
                        color="inherit"
                        href="/addmovie"
                    >
                        <Badge color="error">
                            <ArticleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 0.5 }}/>
                        </Badge>
                        <Typography
                            variant="h6"
                            noWrap
                            // component="a"
                            sx={{
                                mr: 1,
                                display: { xs: 'none', md: 'flex' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 600,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            AddMovie
                        </Typography>
                    </IconButton>
                </Tooltip>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Tooltip title="Movies">
                    <IconButton

                        size="large"
                        aria-label="movies"
                        color="inherit"
                        href="/movies"
                    >
                        <Badge color="error">
                            <ArticleIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 0.5 }}/>
                        </Badge>
                        <Typography
                            variant="h6"
                            noWrap
                            // component="a"
                            sx={{
                                mr: 1,
                                display: { xs: 'none', md: 'flex' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 600,
                                letterSpacing: '.1rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            Movies
                        </Typography>
                    </IconButton>
                </Tooltip>
            </Box>


        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
