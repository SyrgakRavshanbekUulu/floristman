import {
  AppBar,
  IconButton,
  Toolbar,
  makeStyles,
  Grid,
} from "@material-ui/core"
import {Menu, Person, Search, ShoppingCart} from "@material-ui/icons"

import logo from '../../images/logo.png'

export const Header = () => {
  const styles = useStyles()

  return (
    <div>
      <AppBar position='static' color="secondary">
        <Grid>
          <Toolbar className={styles.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
              <Menu fontSize='large'/>
            </IconButton>
            <Grid item
              className={styles.title}
              container
              justifyContent="center"
              xs={6}
            >
              <div className={styles.logo}><img src={logo} alt="logo"/></div>
              <div className={styles.titleText}>
                <h1
                  style={{fontSize: "25px", fontFamily: 'Gadugi'}}
                >FLORISTMAN</h1>
                <p style={{fontSize: "11.5px"}}>Широкий выбор на любой вкус</p>
              </div>
            </Grid>
            <Grid>
              <IconButton>
                <Search fontSize="large"/>
              </IconButton>
              <IconButton>
                <ShoppingCart fontSize="large"/>
              </IconButton>
              <IconButton>
                <Person fontSize="large"/>
              </IconButton>
            </Grid>
          </Toolbar>
        </Grid>
      </AppBar>
    </div>
  )
}

const useStyles = makeStyles({
  appbar: {

  },
  logo: {

  },
  toolbar: {
    maxWidth: '1180px',
    margin: 'auto',
  },
  title: {
    margin: 'auto',
  },
  titleText: {
    lineHeight: 0,
    paddingTop: '7px',
  },
})
