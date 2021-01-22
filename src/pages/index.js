import * as React from "react"

const IndexPage = () => {
  const date = new Date().getFullYear();

  return (
    <main>
        Here should lie the date: {date} :but it does not!
    </main>
  )
}

export default IndexPage
