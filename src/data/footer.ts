export type FooterFillingType = {
     columns: Array<ColumnsType>;
     text: string;
};

type ColumnsType = {
     id: number;
     header: string;
     children: Array<ChildrenType>;
};

type ChildrenType = {
     id: number;
     word: string;
};

export const footerFilling: FooterFillingType = {
     columns: [
          {
               id: 1,
               header: "company",
               children: [
                    {
                         id: 1,
                         word: "about us",
                    },
                    {
                         id: 2,
                         word: "contact us",
                    },
                    {
                         id: 3,
                         word: "blog",
                    },
                    {
                         id: 4,
                         word: "blog detail",
                    },
               ],
          },
          {
               id: 2,
               header: "community",
               children: [
                    {
                         id: 1,
                         word: "activity",
                    },
                    {
                         id: 2,
                         word: "timeline",
                    },
                    {
                         id: 3,
                         word: "forums",
                    },
                    {
                         id: 4,
                         word: "friends",
                    },
               ],
          },
          {
               id: 3,
               header: "help",
               children: [
                    {
                         id: 1,
                         word: "frequently asked question",
                    },
                    {
                         id: 2,
                         word: "privacy policy",
                    },
                    {
                         id: 3,
                         word: "terms & condition",
                    },
               ],
          },
          {
               id: 4,
               header: "follow us",
               children: [
                    {
                         id: 1,
                         word: "facebook",
                    },
                    {
                         id: 2,
                         word: "instagram",
                    },
                    {
                         id: 3,
                         word: "dribble",
                    },
               ],
          },
     ],

     text: "© 2024 SocialV. all rights reserved.",
};
