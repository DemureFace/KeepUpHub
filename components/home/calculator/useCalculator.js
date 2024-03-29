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
      price: 2500,
    },
    {
      label: "calculator_section.ranges.customer-base.options.second",
      value: 2,
      price: 4250,
    },
    {
      label: "calculator_section.ranges.customer-base.options.third",
      value: 3,
      price: 8000,
    },
    {
      label: "calculator_section.ranges.customer-base.options.fourth",
      value: 4,
      price: 20000,
    },
    {
      label: "calculator_section.ranges.customer-base.options.fifth",
      value: 5,
      price: 38500,
    },
  ];

  const supportValue = ref(1);

  const supportRangeList = [
    {
      label: "calculator_section.ranges.support.options.first",
      value: 1,
      price: 3000,
    },
    {
      label: "calculator_section.ranges.support.options.second",
      value: 2,
      price: 12500,
    },
    {
      label: "calculator_section.ranges.support.options.third",
      value: 3,
      price: 23000,
    },
    {
      label: "calculator_section.ranges.support.options.fourth",
      value: 4,
      price: 55000,
    },
    {
      label: "calculator_section.ranges.support.options.fifth",
      value: 5,
      price: 100000,
    },
  ];

  const paymentsAndAntiFraudValue = ref(1);

  const paymentsAndAntiFraudRangeList = [
    {
      label: "calculator_section.ranges.payment.options.first",
      value: 1,
      price: 3000,
    },
    {
      label: "calculator_section.ranges.payment.options.second",
      value: 2,
      price: 12500,
    },
    {
      label: "calculator_section.ranges.payment.options.third",
      value: 3,
      price: 23000,
    },
    {
      label: "calculator_section.ranges.payment.options.fourth",
      value: 4,
      price: 55000,
    },
    {
      label: "calculator_section.ranges.payment.options.fifth",
      value: 5,
      price: 100000,
    },
  ];

  const retentionValue = ref(1);

  const retentionRangeList = [
    {
      label: "calculator_section.ranges.retention.options.first",
      value: 1,
      price: 5000,
    },
    {
      label: "calculator_section.ranges.retention.options.second",
      value: 2,
      price: 9500,
    },
    {
      label: "calculator_section.ranges.retention.options.third",
      value: 3,
      price: 17500,
    },
    {
      label: "calculator_section.ranges.retention.options.fourth",
      value: 4,
      price: 40000,
    },
    {
      label: "calculator_section.ranges.retention.options.fifth",
      value: 5,
      price: 75000,
    },
  ];

  const monthValue = ref(1);

  const monthRangeList = [
    {
      label: "1",
      value: 1,
      coefficient: 1,
    },
    {
      label: "6",
      value: 2,
      coefficient: 6,
    },
    {
      label: "12",
      value: 3,
      coefficient: 12,
    },
    {
      label: "24",
      value: 4,
      coefficient: 24,
    },
    {
      label: "36",
      value: 5,
      coefficient: 36,
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
    {
      id: "payments-and-anti-fraud",
      title: "calculator_section.ranges.payment.title",
      label: "(Payments & Anti-Fraud)",
      modelValue: paymentsAndAntiFraudValue,
      rangeValues: paymentsAndAntiFraudRangeList,
    },
    {
      id: "retention",
      title: "calculator_section.ranges.retention.title",
      label: "(Retention)",
      modelValue: retentionValue,
      rangeValues: retentionRangeList,
    },
  ]);

  const totalCost = computed(() => {
    const periodCoefficient = monthRangeList.find(
      ({ value }) => value === monthValue.value,
    ).coefficient;

    return checkedServices.value.reduce((totalPrice, service) => {
      const range = rangesList.value.find(({ id }) => service === id);

      if (range) {
        const { price = 0 } =
          range.rangeValues.find(({ value }) => value === range.modelValue) ||
          {};

        totalPrice += price * periodCoefficient;
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
