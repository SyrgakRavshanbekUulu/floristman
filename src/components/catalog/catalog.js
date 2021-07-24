import {Grid} from "@material-ui/core"
import {RenderCard} from "./render-card"
import {RenderMiddleCard} from "./render-middle-card"
import {useStyles} from "./style"

import bouquets from './image/bouquets.png'
import forWhom from './image/for-whom.png'
import holidayCollections from './image/holiday-collections.png'
import presents from './image/presents.png'
import rouses from './image/rouses.png'
import sweets from './image/sweets.png'
import houseFlowers from './image/house-flowers.png'

export const Catalog = () => {
  const styles = useStyles()

  return (
    <div className={styles.box}>
      <Grid container className={styles.block}>
        <Grid item xs={12}>
          <h1 className={styles.title}>Каталог</h1>
        </Grid>

        <Grid item xs={3}>
          <div className={styles.outside}>
            <RenderCard img={forWhom} text={'Для кого'}/>
          </div>
          <div className={styles.outside}>
            <RenderCard img={sweets} text={'Сладости'}/>
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className={styles.middle}>
            <RenderMiddleCard
              img={presents}
              text='Подарки'
              styl={{right: 0}}
            />
          </div>
          <div className={styles.middle}>
            <RenderMiddleCard
              img={bouquets}
              text='Букеты'
              styl={{left: 0}}
            />
          </div>
          <div className={styles.middle}>
            <RenderMiddleCard
              img={rouses}
              text='Букеты'
              styl={{right: 0}}
            />
          </div>
        </Grid>

        <Grid item xs={3}>
          <div className={styles.outside}>
            <RenderCard img={holidayCollections} text='Праздничная коллекция'/>
          </div>
          <div className={styles.outside}>
            <RenderCard img={houseFlowers} text='Комнатные растения'/>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
