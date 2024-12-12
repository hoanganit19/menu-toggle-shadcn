import Menu from "./_components/Menu";
const getData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          name: "Menu 1",
          children: [
            {
              id: 2,
              name: "Menu 1.1",
            },
            {
              id: 3,
              name: "Menu 1.2",
            },
          ],
        },
        {
          id: 4,
          name: "Menu 2",
          children: [
            {
              id: 5,
              name: "Menu 2.1",
            },
            {
              id: 6,
              name: "Menu 2.2",
            },
          ],
        },
      ]);
    });
  });
};
export default async function Home() {
  const menu = await getData();

  return (
    <div>
      <Menu data={menu as []} />
    </div>
  );
}
