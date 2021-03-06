import { compose } from 'redux'
import { withStyles } from 'material-ui/styles'
import { withStateHandlers } from 'recompose'
import styles from './SidebarLayout.styles'

export default compose(
  withStateHandlers(
    ({ initialActions = [] }) => ({
      selectedActions: initialActions,
      envDialogOpen: false,
      drawerOpen: false
    }),
    {
      addAction: ({ selectedActions }) => action => ({
        selectedActions: selectedActions.concat(action)
      }),
      toggleDialog: ({ envDialogOpen }) => action => ({
        envDialogOpen: !envDialogOpen
      }),
      removeAction: ({ selectedActions }) => ind => ({
        selectedActions: selectedActions.filter((_, i) => i !== ind)
      }),
      toggleDrawer: ({ drawerOpen }) => e => ({ drawerOpen: !drawerOpen })
    }
  ),
  withStyles(styles)
)
