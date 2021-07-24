import {makeStyles} from "@material-ui/core"
import oimo from './image/oimo.png'

const oimoBasic = {
  position: 'absolute',
  background: `url(${oimo})`,
  width: '57px',
  height: '57px',
}

export const useStyles = makeStyles({
  box: {
    backgroundColor: '#FCEFE4',
    padding: '20px 0',
  },
  block: {
    margin: 'auto',
    maxWidth: '1180px',
  },
  title: {
    fontSize: '48px',
    margin: 0,
    paddingBottom: '30px',
  },
  titleCatalog: {
    opacity: '0.8',
    backgroundColor: '#fff',
    bottom: 0,
    position: 'absolute',
    width: '100%',
    height: '35%',
  },
  titleMiddleCat: {
    opacity: '0.8',
    backgroundColor: '#fff',
    position: 'absolute',
    width: '30%',
    height: '100%',
    bottom: 0,
  },
  oimo1: {
    ...oimoBasic,
    transform: 'matrix(0, -1, -1, 0, 0, 0)',
    top: 0,
    right: 0,
  },
  oimo2: {
    ...oimoBasic,
    transform: 'rotate(-90deg)',
    top: 0,
    left: 0,
  },
  oimo3: {
    ...oimoBasic,
    transform: 'matrix(0, 1, 1, 0, 0, 0)',
    bottom: 0,
    left: 0,
  },
  oimo4: {
    ...oimoBasic,
    transform: 'rotate(90deg)',
    bottom: 0,
    right: 0,
  },
  oimoTitle: {
    paddingTop: '15%',
    opacity: 1,
    textAlign: 'center',
  },
  oimoMiddleTitle: {
    paddingTop: '45%',
    opacity: 1,
    textAlign: 'center',
  },
  outside: {
    width: '95%',
    marginBottom: '10px',
  },
  middle: {
    width: '98%',
    marginBottom: '21px',
  },
})
