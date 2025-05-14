import React from 'react'

import { Sheet } from '@/components/ui/sheet'

type DialogContextType = {
  open: boolean
  toggleDialog: () => void
}

const DialogContext = React.createContext({} as DialogContextType)

const DialogProvider = ({ children }: React.PropsWithChildren) => {
  const [open, setOpen] = React.useState(false)

  const toggleDialog = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <DialogContext.Provider value={{ open, toggleDialog }}>
      {children}
    </DialogContext.Provider>
  )
}

const DialogRoot = ({ children }: React.PropsWithChildren) => {
  const { open, toggleDialog } = useDialog()

  return (
    <Sheet open={open} onOpenChange={toggleDialog}>
      {children}
    </Sheet>
  )
}

const useDialog = () => {
  const context = React.useContext(DialogContext)

  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider')
  }

  return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { useDialog, DialogRoot, DialogProvider }
