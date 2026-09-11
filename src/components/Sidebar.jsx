import { Button } from "@/components/ui/button"

const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"]

function Sidebar() {
  return (
    <div className="flex flex-col gap-6">

      <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-lg p-6 h-40 flex flex-col justify-end text-white">
        <h1 className="text-xl font-bold">Frontend Mentor</h1>
        <p className="text-sm opacity-90">Feedback Board</p>
      </div>

      <div className="bg-white rounded-lg p-6 flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button key={category} variant="secondary" size="sm">
            {category}
          </Button>
        ))}
      </div>

      <div className="bg-white rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-slate-800">Roadmap</h2>
          <a href="#" className="text-blue-600 underline text-sm">View</a>
        </div>
        <div className="flex flex-col gap-2 text-slate-500">
          <div className="flex justify-between">
            <span>🟠 Planned</span>
            <span className="font-bold">2</span>
          </div>
          <div className="flex justify-between">
            <span>🟣 In-Progress</span>
            <span className="font-bold">3</span>
          </div>
          <div className="flex justify-between">
            <span>🔵 Live</span>
            <span className="font-bold">1</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar