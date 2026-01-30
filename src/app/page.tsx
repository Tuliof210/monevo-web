const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* Testando a cor customizada 'brand-600' */}
        <h1 className="text-brand-600 text-4xl font-bold">Monevo Frontend (v4)</h1>
        <p className="mt-4 text-xl text-gray-700">Sistema de Planejamento Financeiro - v2.0</p>
        <div className="border-brand-100 mt-8 rounded-lg border bg-white p-4 shadow">
          <p className="text-gray-500">
            Status: Setup Dia 002 Concluído ✅<br />
            Engine: Tailwind CSS v4 🚀
          </p>
        </div>
      </div>
    </main>
  )
}

export default Home
