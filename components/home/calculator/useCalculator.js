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

  const supportValue = ref(1);

  const supportRangeList = [
    {
      label: "calculator_section.ranges.support.options.first",
      value: 1,
      price: 1000,
    },
    {
      label: "calculator_section.ranges.support.options.second",
      value: 2,
      price: 2500,
    },
    {
      label: "calculator_section.ranges.support.options.third",
      value: 3,
      price: 3700,
    },
    {
      label: "calculator_section.ranges.support.options.fourth",
      value: 4,
      price: 5000,
    },
    {
      label: "calculator_section.ranges.support.options.fifth",
      value: 5,
      price: 7000,
    },
  ];

  const monthValue = ref(1);

  const monthRangeList = [
    {
      label: "1 місяць",
      value: 1,
    },
    {
      label: "2",
      value: 2,
    },
    {
      label: "3",
      value: 3,
    },
    {
      label: "4",
      value: 4,
    },
    {
      label: "5",
      value: 5,
    },
    {
      label: "6",
      value: 6,
    },
    {
      label: "7",
      value: 7,
    },
    {
      label: "8",
      value: 8,
    },
    {
      label: "9",
      value: 9,
    },
    {
      label: "10",
      value: 10,
    },
    {
      label: "11",
      value: 11,
    },
    {
      label: "12 місяців",
      value: 12,
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
    {
      id: "support",
      title: "calculator_section.ranges.support.title",
      label: "(Support)",
      modelValue: supportValue,
      rangeValues: supportRangeList,
    },
  ]);

  return {
    serviceList,
    checkedServices,
    rangesList,
    monthValue,
    monthRangeList,
  };
}
