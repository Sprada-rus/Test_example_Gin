export default function Footer() {
  const footerSections = [
    {
      title: "Информация",
    },
    {
      title: "Пользователи",
    },
    {
      title: "Реклама",
    },
    {
      title: "Условия",
    },
    {
      title: "Политика Конфиденциальности",
    },
    {
      title: "Поддержка"
    },
    {
      title: "Клиенты"
    },
    {
      title: "Настройки Куки"
    },
    {
      title: "Главная"
    },
  ];

  return (
    <footer>
      <div className="px-8 pb-8 max-w-[1544px] mx-auto">
        <div className="grid grid-cols-5 gap-x-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <p className="text-4 font-sans text-[#fff]/40 mb-4">
                {section.title}
              </p>

            </div>
          ))}
        </div>
        <p className="text-4 font-sans text-[#fff]/20 mb-4 indent-[11.5px]">@test</p>
      </div>
    </footer>
  );
}
