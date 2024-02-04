export function useCalculator() {
  const checkedServices = ref([]);

  const serviceList = [
    { id: "contact-center", label: "Сontact Center", value: "contact-center" },
    { id: "support", label: "Support", value: "support" },
    {
      id: "payments-and-anti-fraud",
      label: "Payments & Anti-Fraud",
      value: "payments-and-anti-fraud",
    },
    { id: "retention", label: "Retention", value: "retention" },
  ];

  const customerBaseValue = ref(1);

  const customerBaseRangeList = [
    {
      label: "calculator_section.ranges.customer-base.options.first",
      value: 1,
      price: 1000,
    },
    {
      label: "calculator_section.ranges.customer-base.options.second",
      value: 2,
      price: 2500,
    },
    {
      label: "calculator_section.ranges.customer-base.options.third",
      value: 3,
      price: 3700,
    },
    {
      label: "calculator_section.ranges.customer-base.options.fourth",
      value: 4,
      price: 5000,
    },
    {
      label: "calculator_section.ranges.customer-base.options.fifth",
      value: 5,
      price: 7000,
    },
  ];

  const rangesList = ref([
    {
      id: "contact-center",
      title: "calculator_section.ranges.customer-base.title",
      label: "(Contact Center)",
      modelValue: customerBaseValue,
      rangeValues: customerBaseRangeList,
    },
  ]);

  return {
    serviceList,
    checkedServices,
    rangesList,
    customerBaseValue,
    customerBaseRangeList,
  };
}
