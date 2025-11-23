import { useEffect, useState } from "react";
import { StructureRepository } from "@/data/repositories/StructureRepository";
import type { OpeningPattern } from "@/core/domain/models/OpeningPattern";

export function useOpeningPatterns() {
    const [data, setData] = useState<OpeningPattern[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        setError(null);

        StructureRepository.fetchOpeningPatterns()
            .then((res) => {
                if (!isMounted) return;
                setData(res);
            })
            .catch((err) => {
                if (!isMounted) return;
                console.error("Erro ao carregar opening-patterns:", err);
                setError(err as Error);
            })
            .finally(() => {
                if (!isMounted) return;
                setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    return { data, loading, error };
}
