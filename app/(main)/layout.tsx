import Navbar from "./Navbar"

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <Navbar />
        <main>{children}</main>
    </div>
  )
}
export default layout