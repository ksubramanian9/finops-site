export default function HomePage() {
  return (
    <>
      {/* Overview Section */}
      <section id="overview" className="content-section">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          FinOps: A Guide to Cloud Financial Management
        </h2>
        <p className="text-lg text-slate-600 mb-8 max-w-4xl">
          FinOps is a cultural practice that brings financial accountability to the variable spend model of the cloud. It enables organizations to get maximum business value by helping engineering, finance, and business teams to collaborate on data-driven spending decisions.
        </p>
      </section>

      {/* Principles Section */}
      <section id="principles" className="content-section">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">The Three Phases of FinOps</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="flex items-center space-x-4 mb-2">
              <span className="text-2xl font-bold text-sky-600">1.</span>
              <h3 className="text-xl font-bold text-slate-900">Inform</h3>
            </div>
            <p className="text-slate-600">
              Making cloud cost data visible and understandable to all stakeholders. This involves creating a single source of truth for cloud spend and business drivers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="flex items-center space-x-4 mb-2">
              <span className="text-2xl font-bold text-sky-600">2.</span>
              <h3 className="text-xl font-bold text-slate-900">Optimize</h3>
            </div>
            <p className="text-slate-600">
              Taking action to reduce cloud costs through rightsizing, deleting unused resources, or using committed-use discounts and reserved instances.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="flex items-center space-x-4 mb-2">
              <span className="text-2xl font-bold text-sky-600">3.</span>
              <h3 className="text-xl font-bold text-slate-900">Operate</h3>
            </div>
            <p className="text-slate-600">
              Implementing continuous, automated processes to manage and forecast cloud spend. This embeds financial accountability into daily operations.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className="content-section">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Key FinOps Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Unit Cost</h3>
            <p className="text-slate-600 mb-4">The cost of a single business unit, like cost per user or cost per transaction. This metric ties cloud spend directly to business value.</p>
            <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-sky-600" style={{ width: '75%' }}></div>
            </div>
            <p className="text-right text-sm text-slate-500 mt-1">75% of target unit cost</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Savings Rate</h3>
            <p className="text-slate-600 mb-4">The percentage of total cloud spend that was saved through optimization efforts. A key indicator of FinOps program success.</p>
            <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-sky-600" style={{ width: '25%' }}></div>
            </div>
            <p className="text-right text-sm text-slate-500 mt-1">25% month-over-month savings</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Reserved Instance Coverage</h3>
            <p className="text-slate-600 mb-4">The percentage of eligible compute usage that is covered by reserved instances or savings plans. A higher percentage indicates better long-term planning.</p>
            <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-sky-600" style={{ width: '85%' }}></div>
            </div>
            <p className="text-right text-sm text-slate-500 mt-1">85% coverage</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Cloud Spend Variance</h3>
            <p className="text-slate-600 mb-4">The difference between budgeted and actual cloud spend. Low variance indicates accurate forecasting and good cost control.</p>
            <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-red-500" style={{ width: '45%' }}></div>
            </div>
            <p className="text-right text-sm text-red-500 mt-1">45% over budget</p>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="content-section">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Cloud Spend Dashboard</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 bg-slate-100 rounded-lg">
              <p className="text-sm font-semibold text-slate-500">Total Monthly Spend</p>
              <p className="text-4xl font-bold text-slate-900 mt-2">$1,245,678</p>
              <p className="text-sm text-red-500 mt-2">↑ 5% from last month</p>
            </div>
            <div className="p-6 bg-slate-100 rounded-lg">
              <p className="text-sm font-semibold text-slate-500 mb-4">Top 5 Services by Cost</p>
              <ul className="space-y-2">
                <li className="flex justify-between items-center text-slate-700">
                  <span>Compute Engine</span>
                  <span className="font-semibold">$520,300</span>
                </li>
                <li className="flex justify-between items-center text-slate-700">
                  <span>Cloud Storage</span>
                  <span className="font-semibold">$315,800</span>
                </li>
                <li className="flex justify-between items-center text-slate-700">
                  <span>Kubernetes Engine</span>
                  <span className="font-semibold">$210,000</span>
                </li>
                <li className="flex justify-between items-center text-slate-700">
                  <span>BigQuery</span>
                  <span className="font-semibold">$120,500</span>
                </li>
                <li className="flex justify-between items-center text-slate-700">
                  <span>Pub/Sub</span>
                  <span className="font-semibold">$79,078</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
