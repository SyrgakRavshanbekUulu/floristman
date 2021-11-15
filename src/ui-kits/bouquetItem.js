import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
} from "@material-ui/core"
import romashka from '../images/romashka.png'

export const BouquetItem = () => {
  const styles = useStyles()

  return (
    <div className={styles.box}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="bouquet image"
            height='245px'
            image={romashka}
            style={{padding: '5px', width: '97%'}}
          />
          <div className={styles.info}>
            <div className={styles.hit}>ХИТ ПРОДАЖ</div>
            <div className={styles.news}>НОВИНКА</div>
            <div className={styles.bouquetDay}>БУКЕТ ДНЯ</div>
          </div>
          <div className={styles.discounts}>Скидка 50%</div>
          <CardContent className={styles.title}>
            <p>№225 “Ромашки для Наташки” </p>
            <p>№225 “Ромашки для Наташ” </p>
          </CardContent>
        </CardActionArea>

        <CardActions style={{justifyContent: 'space-around'}}>
          <div className={styles.price}>
            <span className={styles.oldPrice}>5400p</span>
            <p>3700p</p>
          </div>
          <Button
            variant="contained"
            color="secondary"
            className={styles.button}>
            Заказать
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
const btn = {
  width: '115px',
  fontSize: '14px',
  marginTop: '4px',
  borderRadius: '0px 6px 6px 0px',
  textAlign: 'center',
}
const useStyles = makeStyles({
  box: {
    paddingLeft: '15px',
  },
  button: {
    borderRadius: '20px',
  },
  price: {
    lineHeight: '0',
    fontSize: '16px',
    color: '#7EA048',
  },
  oldPrice: {
    fontSize: '13px',
    textDecoration: 'line-through',
    paddingLeft: '5px',
    color: '#8E8D6F',
  },
  title: {
    lineHeight: '0.5',
    padding: '5px 16px',
  },
  info: {
    position: 'absolute',
    top: '5px',
    left: '0',
  },
  hit: {
    backgroundColor: '#FD4F79',
    ...btn,
  },
  news: {
    backgroundColor: '#4AE950',
    ...btn,
  },
  bouquetDay: {
    backgroundColor: '#FD984F',
    ...btn,
  },
  discounts: {
    ...btn,
    backgroundColor: '#F1EB4C',
    borderRadius: ' 6px 0 0 6px',
    position: 'absolute',
    bottom: '80px',
    right: '0',
  },
})

