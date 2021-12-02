var vm = new Vue({
  el: "#app",
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return { 
      options: {
        chart: {
          id: "vuechart",
        },
        xaxis: {
          labels: {
            format: 'dd/MM',
          },type: "datetime",
        },
        legend: {
          show: true,
          showForSingleSeries: true,
        },
        stroke: {
          curve: 'smooth',
        }
      },
      serverSelected: "",
      serviceSelected: "",
      optionSelected: "All",
      serviceFilter: false,
      functionFilter: false,
      optionsStatus: ["All", "Failed", "Success"],
      servers: [
        {
          name: "S1",
          ip: "122.11.22",
          working: true,
          services: [
            {
              name: "Z1",
              storage: 90,
              status: "Success",
              functionSelected: "",
              failed: 0,
              functions: [
                {
                  name: "func1",
                  status: "OK",
                  series: 
                    {
                      name: "func1",
                      data: [
                        [1786684800000, 34],
                        [1786771200000, 43],
                        [1786857600000, 31],
                        [1786944000000, 43],
                        [1787030400000, 33],
                        [1787116800000, 52],
                      ],
                    },
                  
                },
                {
                  name: "func2",
                  status: "Failure",
                  series: 
                    {
                      name: "func2",
                      data: [
                        [1786684800000, 38],
                        [1786771200000, 40],
                        [1786857600000, 35],
                        [1786944000000, 43],
                        [1787030400000, 37],
                        [1787116800000, 40],
                      ],
                    },
                  
                },
                {
                  name: "func3",
                  status: "OK",
                  series: {
                      name: "func3",
                      data: [
                        [1786684800000, 38],
                        [1786771200000, 30],
                        [1786857600000, 15],
                        [1786944000000, 43],
                        [1787030400000, 37],
                        [1787116800000, 40],
                      ],
                    },
                  
                },
                {
                  name: "func4",
                  status: "OK",
                  series: 
                    {
                      name: "func4",
                      data: [
                        [1786684800000, 28],
                        [1786771200000, 20],
                        [1786857600000, 75],
                        [1786944000000, 53],
                        [1787030400000, 37],
                        [1787116800000, 20],
                      ],
                    },
                  
                },
                {
                  name: "func5",
                  status: "Failure",
                  series: 
                    {
                      name: "func5",
                      data: [
                        [1786684800000, 28],
                        [1786771200000, 80],
                        [1786857600000, 95],
                        [1786944000000, 73],
                        [1787030400000, 47],
                        [1787116800000, 20],
                      ],
                    },
                },
                {
                  name: "func6",
                  status: "OK",
                  series: 
                    {
                      name: "func6",
                      data: [
                        [1786684800000, 28],
                        [1786771200000, 50],
                        [1786857600000, 39],
                        [1786944000000, 49],
                        [1787030400000, 27],
                        [1787116800000, 10],
                      ],
                    },
                
                },
              ],
            },
            {
              name: "Z2",
              storage: 74,
              status: "Failed",
              functionSelected: "",
              failed: 0,
              functions: [
                {
                  name: "func7",
                  status: "Failure",
                  series: 
                    {
                      name: "func7",
                      data: [
                        [1486684800000, 18],
                        [1486771200000, 30],
                        [1486857600000, 55],
                        [1486944000000, 63],
                        [1487030400000, 27],
                        [1487116800000, 30],
                      ],
                    },
                  
                },
                {
                  name: "func8",
                  status: "Failure",
                  series: 
                    {
                      name: "func8",
                      data: [
                        [1486684800000, 18],
                        [1486771200000, 18],
                        [1486857600000, 45],
                        [1486944000000, 42],
                        [1487030400000, 36],
                        [1487116800000, 18],
                      ],
                    },
                  
                },
                {
                  name: "func9",
                  status: "OK",
                  series: 
                    {
                      name: "func9",
                      data: [
                        [1486684800000, 30],
                        [1486771200000, 42],
                        [1486857600000, 23],
                        [1486944000000, 49],
                        [1487030400000, 31],
                        [1487116800000, 40],
                      ],
                    },
                  
                },
              ],
            },
            {
              name: "Z3",
              storage: 60,
              status: "Failed",
              functionSelected: "",
              failed: 0,
              functions: [
                {
                  name: "func4",
                  status: "OK",
                  series: 
                    {
                      name: "func4",
                      data: [
                        [1486684800000, 38],
                        [1486771200000, 40],
                        [1486857600000, 35],
                        [1486944000000, 43],
                        [1487030400000, 37],
                        [1487116800000, 40],
                      ],
                    },
                  
                },
                {
                  name: "func5",
                  status: "Failure",
                  series: 
                    {
                      name: "func2",
                      data: [
                        [1486684800000, 18],
                        [1486771200000, 30],
                        [1486857600000, 45],
                        [1486944000000, 23],
                        [1487030400000, 17],
                        [1487116800000, 30],
                      ],
                    },
                  
                },
              ],
            },
          ],
        },
        {
          name: "S2",
          working: false,
          ip: "133.31.22",
          services: [
            {
              name: "Z4",
              storage: 40,
              status: "Success",
              functionSelected: "",
              failed: 0,
              functions: [
                {
                  name: "func7",
                  status: "Failure",
                  series: 
                    {
                      name: "func7",
                      data: [
                        [1486684800000, 38],
                        [1486771200000, 40],
                        [1486857600000, 35],
                        [1486944000000, 43],
                        [1487030400000, 37],
                        [1487116800000, 40],
                      ],
                    },
                  
                },
                {
                  name: "func8",
                  status: "Failure",
                  series: 
                    {
                      name: "func8",
                      data: [
                        [1486684800000, 19],
                        [1486771200000, 39],
                        [1486857600000, 31],
                        [1486944000000, 17],
                        [1487030400000, 30],
                        [1487116800000, 42],
                      ],
                    },
                  
                },
                {
                  name: "func9",
                  status: "OK",
                  series: 
                    {
                      name: "func2",
                      data: [
                        [1486684800000, 28],
                        [1486771200000, 10],
                        [1486857600000, 25],
                        [1486944000000, 33],
                        [1487030400000, 27],
                        [1487116800000, 10],
                      ],
                    },
                  
                },
              ],
            },
            {
              name: "Z5",
              storage: 70,
              status: "Success",
              functionSelected: "",
              failed: 0,
              functions: [
                {
                  name: "func1",
                  status: "OK",
                  series: 
                    {
                      name: "func1",
                      data: [
                        [1486684800000, 38],
                        [1486771200000, 40],
                        [1486857600000, 35],
                        [1486944000000, 43],
                        [1487030400000, 37],
                        [1487116800000, 40],
                      ],
                    },
                  
                },
                {
                  name: "func2",
                  status: "OK",
                  series: 
                    {
                      name: "func2",
                      data: [
                        [1486684800000, 18],
                        [1486771200000, 30],
                        [1486857600000, 25],
                        [1486944000000, 43],
                        [1487030400000, 37],
                        [1487116800000, 40],
                      ],
                    },
                  
                },
                {
                  name: "func3",
                  status: "OK",
                  series: 
                    {
                      name: "func3",
                      data: [
                        [1486684800000, 38],
                        [1486771200000, 10],
                        [1486857600000, 45],
                        [1486944000000, 19],
                        [1487030400000, 37],
                        [1487116800000, 40],
                      ],
                    },
                  
                },
              ],
            },
            {
              name: "Z6",
              storage: 87,
              status: "Failed",
              functionSelected: "",
              failed: 0,
              functions: [
                {
                  name: "func1",
                  status: "OK",
                  series: [
                    {
                      name: "func1",
                      data: [
                        [1486684800000, 38],
                        [1486771200000, 40],
                        [1486857600000, 35],
                        [1486944000000, 43],
                        [1487030400000, 37],
                        [1487116800000, 40],
                      ],
                    },
                  ],
                },
                {
                  name: "func2",
                  status: "Failure",
                  series: 
                    {
                      name: "func2",
                      data: [
                        [1486684800000, 38],
                        [1486771200000, 40],
                        [1486857600000, 30],
                        [1486944000000, 40],
                        [1487030400000, 30],
                        [1487116800000, 41],
                      ],
                    },
                  
                },
                {
                  name: "func3",
                  status: "Failure",
                  series: 
                    {
                      name: "func3",
                      data: [
                        [1486684800000, 18],
                        [1486771200000, 30],
                        [1486857600000, 25],
                        [1486944000000, 3],
                        [1487030400000, 37],
                        [1487116800000, 10],
                      ],
                    },
                  
                },
              ],
            },
          ],
        },
      ],
    };
  },
  computed: {
    ipAddress() {
      return this.serverSelected.ip;
    },
    servicesAvaliable() {
      return this.serverSelected.services;
    },
    servicesStatus() {
      var a = [];
      if (!this.servicesAvaliable) {
        return;
      }
      for (var i = 0; i < this.servicesAvaliable.length; i++) {
        if (this.optionSelected == this.servicesAvaliable[i].status) {
          a.push(this.servicesAvaliable[i]);
        }
        if (this.optionSelected == "All") {
          return this.servicesAvaliable;
        }
      }
      return a;
    },
    serviceCheck() {
      var a = [];
      if (!this.servicesStatus) {
        return;
      }
      for (var i = 0; i < this.servicesStatus.length; i++) {
        if (this.serviceSelected.name == this.servicesStatus[i].name) {
          a.push(this.servicesStatus[i]);
        }
        if (this.serviceSelected == "") {
          return this.servicesStatus;
        }
      }
      return a;
    },
    lineChart() {
      return (s) => {
        var a = [];
        for (let i = 0; i < s.functions.length; i++) {
          a.push(s.functions[i].series);
        }
        return a;
      };
    },
    errors() {
      return (s) => {
        var c = 0;
        for (let i = 0; i < s.functions.length; i++) {
          if (s.functions[i].status == "Failure") {
            c++;
          }
        }
        return s.failed + c;
      };
    },
  },
  methods: {},
});
