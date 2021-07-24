import {Grid, makeStyles} from "@material-ui/core"
import {Remove} from "@material-ui/icons"
import {BouquetItem} from "../../ui-kits/bouquetItem"
export const Discounts = () => {
  const styles = useStyles()
  return (
    <div className={styles.main}>
      <Grid container className={styles.block}>
        <h1 className={styles.title}>Скидки</h1>
        <Grid
          container
          justifyContent="space-between"
          className={styles.bouquets}
        >
          <BouquetItem />
          <BouquetItem />
          <BouquetItem />
          <BouquetItem />
        </Grid>
        <Grid container justifyContent="center" style={{margin: '30px'}}>
          <Remove fontSize="large" color="secondary"/>
          <Remove fontSize="large" color="secondary"/>
          <Remove fontSize="large" color="secondary"/>
        </Grid>
      </Grid>
    </div>
  )
}

const useStyles = makeStyles({
  main: {
    backgroundColor: '#FCEFE4',
  },
  title: {
    fontSize: '48px',
    margin: 0,
    marginTop: '30px',
  },
  block: {
    maxWidth: '1180px',
    margin: 'auto',
  },
  bouquets: {
    marginTop: '40px',
  },
})
