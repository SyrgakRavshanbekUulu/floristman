import {Button, Grid, makeStyles} from "@material-ui/core"
import bgImage from '../../images/bgImage.jpg'

export const MainBlock = () => {
  const styles = useStyles()

  return (
    <div className={styles.main}>
      <Grid className={styles.block}>
        <Grid className={styles.content}>
          <p>Подарите ощущение праздника</p>
          <p style={{fontSize: '64px', margin: '1.2rem 0'}}>
            Собираем букеты,<br /> созданные для Вас
          </p>
          <Button
            color="secondary"
            variant='contained'
            className={styles.button}
            size="large"
          >Выбрать букет</Button>
        </Grid>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles({
  block: {
    maxWidth: '1180px',
    margin: 'auto',
  },
  main: {
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    height: '800px',
    backgroundSize: 'cover',
    fontSize: '24px',
  },
  content: {
    paddingTop: '390px',
  },
  button: {
    borderRadius: '37px',
    fontSize: '24px',
  },
})
