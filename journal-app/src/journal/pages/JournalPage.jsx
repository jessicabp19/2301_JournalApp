import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"

import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from '../view'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>Veniam pariatur adipisicing sunt aute enim. Commodo consectetur anim do dolor deserunt eu laboris eu elit sint ullamco labore ipsum. Anim cupidatat voluptate velit aliqua irure adipisicing sint adipisicing non id irure. Officia cupidatat labore deserunt elit amet duis laborum incididunt sint veniam minim ad cillum. Cupidatat elit quis consectetur sit voluptate. Est duis consequat incididunt enim fugiat sunt reprehenderit incididunt consequat id nostrud. Et nostrud anim et id.</Typography> */}
    
      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.8},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>

      </IconButton>

    </JournalLayout>
  )
}
