import type { Neighborhood } from "@/core/domain/models/Neighborhood";

interface Props {
    neighborhoods: Neighborhood[];
    onClose: () => void;
    onSelect: (neighborhood: Neighborhood) => void;
}

export function NeighborhoodSelectModal({
    neighborhoods,
    onClose,
    onSelect,
}: Props) {
    function handleSelect(n: Neighborhood) {
        onSelect(n);
        onClose();
    }

    return (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60">
            <div className="w-[90%] max-w-sm rounded-md border border-white/15 bg-bs-card text-white shadow-xl">
                {/* Cabeçalho */}
                <div className="px-4 py-3">
                    <div className="mb-1 flex items-center justify-between">
                        <h2 className="text-sm font-bold uppercase tracking-[0.18em]">
                            Selecione um bairro
                        </h2>
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-lg font-bold leading-none hover:text-bs-red"
                        >
                            ×
                        </button>
                    </div>
                    <div className="h-[3px] w-24 bg-bs-red" />
                </div>

                {/* Lista de bairros */}
                <ul className="max-h-[60vh] overflow-y-auto py-2">
                    {neighborhoods.map((n) => (
                        <li key={n.id}>
                            <button
                                type="button"
                                onClick={() => handleSelect(n)}
                                className="flex w-full items-center justify-between px-4 py-2 text-sm hover:bg-bs-red/70"
                            >
                                <span>{n.neighborhoodName}</span>
                                <span className="text-xs opacity-70">{">"}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
