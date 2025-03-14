import { Button } from "@/components/ui/button"

const ButtonsPage = () => {
    return (
        <div className="p-4 space-y-4 flex flex-col max-w-[200px]">Buttons Page!!!
            <Button>Default</Button>
            <Button variant="primary">Primary</Button>
            <Button>Priamry Outline</Button>
        </div>
    )
}

export default ButtonsPage;