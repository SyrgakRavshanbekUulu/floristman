import {Card, CardActionArea, CardMedia} from "@material-ui/core"
import {useStyles} from "./style"

export const RenderCard = (props) => {
  const styles = useStyles()
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component='img'
          alt='for whom'
          image={props.img}
        />
        <div className={styles.titleCatalog}>
          <div className={styles.oimo1}></div>
          <div className={styles.oimo2}></div>
          <div className={styles.oimo3}></div>
          <div className={styles.oimo4}></div>
          <div className={styles.oimoTitle}>
            <h3>{props.text}</h3>
          </div>
        </div>
      </CardActionArea>
    </Card>
  )
}
