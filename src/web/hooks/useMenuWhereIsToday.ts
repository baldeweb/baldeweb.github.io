import { useEffect, useState } from "react";
import { StructureRepository } from "@/data/repositories/StructureRepository";
import type { MenuWhereIsTodayOption } from "@/core/domain/models/MenuWhereIsTodayOption";

export function useMenuWhereIsToday() {
    const [data, setData] = useState<MenuWhereIsTodayOption[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);
        setError(null);

        StructureRepository.fetchMenuWhereIsToday()
            .then((res) => {
                if (!isMounted) return;
                setData(res.filter((item) => item.isEnabled));
            })
            .catch((err) => {
                if (!isMounted) return;
                console.error("Erro ao carregar menu-whereistoday:", err);
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
