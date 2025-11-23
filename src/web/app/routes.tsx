import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";
import { PlaceDetailPage } from "../features/PlaceDetailPage";
import { HomePage } from "../features/HomePage";
import { NeighborhoodListPage } from "../features/NeighborhoodListPage";
import { AboutMePage } from "../features/AboutMePage";
import { RecommendationsOriginPage } from "../features/RecommendationsOriginPage";
import { HowToRecommendPage } from "../features/HowToRecommendPage";
import { SupportPage } from "../features/SupportPage";
import { RestaurantsPage } from "../features/RestaurantsPage";
import { PlaceListPage } from "../features/PlaceListPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/neighborhood/:slug", element: <NeighborhoodListPage /> },
            
            { path: "/recommendations-origin", element: <RecommendationsOriginPage /> },
            { path: "/how-to-recommend", element: <HowToRecommendPage /> },
            { path: "/support", element: <SupportPage /> },

            //  Listagens
            { path: "/restaurants", element: <RestaurantsPage /> },
            { path: "/list/:type", element: <PlaceListPage /> },


            //  Detalhes do local (nova rota com categoria para evitar colisão de IDs)
            { path: "/place/:category/:id", element: <PlaceDetailPage /> },
            //  Rota legacy (mantida para compatibilidade, pesquisa em allPlaces)
            { path: "/place/:id", element: <PlaceDetailPage /> },

            //  Pagina Sobre
            { path: "/about", element: <AboutMePage /> },
        ],
    },
]);
