interface Props {
  icon: string
  title: string
  message: string
}

export default function EmptyState({ icon, title, message }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <span className="text-5xl mb-4">{icon}</span>
      <h3 className="font-display text-2xl tracking-wide text-white mb-2">{title}</h3>
      <p className="text-sm text-gslc-muted max-w-md text-center">{message}</p>
    </div>
  )
}
