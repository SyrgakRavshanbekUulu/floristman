import {Card, CardActionArea, CardMedia} from "@material-ui/core"
import {useStyles} from "./style"

export const RenderMiddleCard = (props) => {
  const styles = useStyles()
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='for whom'
          image={props.img}
        />
        <div className={styles.titleMiddleCat} style={{...props.styl}}>
          <div className={styles.oimo1}></div>
          <div className={styles.oimo2}></div>
          <div className={styles.oimo3}></div>
          <div className={styles.oimo4}></div>
          <div className={styles.oimoMiddleTitle}>
            <h3>{props.text}</h3>
          </div>
        </div>
      </CardActionArea>
    </Card>
  )
}
