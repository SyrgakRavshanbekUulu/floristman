import {Grid, makeStyles, Paper} from "@material-ui/core"
import photo1 from '../../images/photo1.png'
import photo2 from '../../images/photo2.png'
import photo3 from '../../images/photo3.png'

export const ForWhom = () => {
  const styles = useStyles()
  return (
    <div className={styles.box}>
      <Grid container className={styles.block}>
        <Grid item xs={12}>
          <h1 className={styles.title}>Почему именно мы?</h1>
        </Grid>
        <Grid xs={6} item>
          <Paper className={styles.text1} elevation={2}>
            <p>Вы можете выбрать любую цветочную композицию
               из нашего каталога или заказать свой вариант.
               Вы можете выбрать любую цветочную композицию
               из нашего каталога или заказать свой вариант</p>
          </Paper>
        </Grid>
        <Grid xs={6} item>
          <img src={photo1}/>
        </Grid>

        <Grid item xs={8} style={{paddingTop: '10px'}}>
          <img src={photo2}/>
        </Grid>

        <Grid item xs={4}>
          <Paper className={styles.text2} elevation={2}>
            <p>Вы можете выбрать любую цветочную
                композицию из нашего каталога или
                заказать свой вариант</p>
          </Paper>
        </Grid>

        <Grid xs={6} item>
          <Paper className={styles.text3} elevation={2}>
            <p>Вы можете выбрать любую цветочную
              композицию из нашего каталога
              или заказать свой вариант</p>
          </Paper>
        </Grid>
        <Grid xs={6} item style={{paddingTop: '40px'}}>
          <img src={photo3}/>
        </Grid>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles({
  box: {
    backgroundColor: '#FCEFE4',
    padding: '20px 0',
  },
  title: {
    fontSize: '48px',
    margin: 0,
    paddingBottom: '30px',
  },
  block: {
    margin: 'auto',
    maxWidth: '1180px',
    padding: '30px 0',
  },
  text1: {
    padding: '40px',
    fontSize: '24px',
    maxWidth: '590px',
    position: 'relative',
    top: '40%',
    left: '30%',
    borderRadius: '20px 0px 20px 20px',
  },
  text2: {
    padding: '40px',
    fontSize: '24px',
    maxWidth: '470px',
    position: 'relative',
    top: '55%',
    right: '380px',
    paddingBottom: '10px',
    borderRadius: '0px 20px 20px 20px',
  },
  text3: {
    padding: '60px',
    fontSize: '24px',
    maxWidth: '570px',
    position: 'relative',
    top: '40%',
    left: '15%',
    borderRadius: '20px 0px 20px 20px',
  },
})
