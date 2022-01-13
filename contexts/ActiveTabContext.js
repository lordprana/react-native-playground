import React, { useContext, useState } from 'react'

const ActiveTabContext = React.createContext()

export const useActiveTab = () => {
  return useContext(ActiveTabContext)
}

export const ActiveTabProvider = ({ initialActiveTab = '', children }) => {
  const [activeTab, updateActiveTab] = useState(initialActiveTab)

  return <ActiveTabContext.Provider value={[activeTab, updateActiveTab]}>{children}</ActiveTabContext.Provider>
}
