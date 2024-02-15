export type CategoryType = {
  type: string;
  data: {
    title: string;
    child: {
      id: number;
      title_fa: string;
      title_en: string;
      code: string;
      top_product_image: string;
      products_count: number;
    }[];
    url: {
      url: string;
      page: string;
      params: {
        category_id: number;
      };
      queries: [];
    };
  };
  name: string;
};
