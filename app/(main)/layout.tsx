import Navbar from "./Navbar"

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main>{children}</main>
    </div>
  )
}
export default layout