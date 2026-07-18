import StatCard from "../components/StatCard";

function Dashboard() {

  const stats = [
    {
      title: "Total Scans",
      value: "18",
      color: "text-blue-600",
    },
    {
      title: "Average Score",
      value: "91%",
      color: "text-green-600",
    },
    {
      title: "Bugs Found",
      value: "34",
      color: "text-red-600",
    },
    {
      title: "Accessibility",
      value: "96%",
      color: "text-purple-600",
    },
  ];

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome to AI QA Engineer
      </p>

      <div className="grid grid-cols-4 gap-6 mt-8">

        {stats.map((stat, index) => (

          <StatCard

            key={index}

            title={stat.title}

            value={stat.value}

            color={stat.color}

          />

        ))}

      </div>

    </div>
  );
}

export default Dashboard;