import Card from "./components/Card";
import Hero from "./components/Hero";
import { data } from "./data/data"
export default function App() {
  return (
    <>
      <Hero />
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 p-10" >
        {data.map((x, i) =>
          (<Card key={i} info={x} />)
        )}
      </div>
    </>
  )
}
