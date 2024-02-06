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
      label: "6",
      value: 2,
    },
    {
      label: "12",
      value: 3,
    },
    {
      label: "24",
      value: 4,
    },
    {
      label: "36 місяців",
      value: 5,
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

  const totalCost = computed(() => {
    return checkedServices.value.reduce((totalPrice, service) => {
      const range = rangesList.value.find(({ id }) => service === id);

      if (range) {
        const { price = 0 } =
          range.rangeValues.find(({ value }) => value === range.modelValue) ||
          {};

        totalPrice += price * monthValue.value;
      }

      return totalPrice;
    }, 0);
  });

  return {
    serviceList,
    checkedServices,
    rangesList,
    monthValue,
    monthRangeList,
    totalCost,
  };
}
