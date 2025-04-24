import { supabase } from "../supabase";

export const getAllBusiness = async () => {
    const { data, error } = await supabase.from('entreprise').select();
    if (error) {
        console.error("Error fetching business data:", error);
        return null;
    }
    return data;
    }

export const getBusinessById = async (id: string) => {
    const { data, error } = await supabase.from("entreprise").select("*").eq("id", id).single();
    if (error) {
        console.error("Error fetching business data:", error);
        return null;
    }
    return data;
}

export const getArticlesByBusinessId = async (businessId: string) => {
    const { data, error } = await supabase.from("offre").select("*").eq("entreprise_id", businessId);
    if (error) {
        console.error("Error fetching articles data:", error);
        return null;
    }
    return data;
}

export const getArticleById = async (id: string) => {
    const { data, error } = await supabase.from("offre").select("*").eq("id", id).single();
    if (error) {
        console.error("Error fetching article data:", error);
        return null;
    }
    return data;
}
