export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-blue-100/70 bg-gradient-to-b from-transparent to-blue-50/40 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <div className="font-serif text-2xl lowercase text-gray-900">answer bolt</div>
            <p className="mt-1 text-sm text-gray-500">A desktop overlay for sales calls</p>
          </div>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} answer bolt</div>
        </div>
      </div>
    </footer>
  )
}
