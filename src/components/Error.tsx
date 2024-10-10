
export default function Error({ children }: { children: React.ReactNode }) {
    return (
        <p className="my-1 uppercase text-sm text-red-600">{children}</p>
    )
}
