export { Sample, Sample2, Sex };
enum Sample {
  Sample1,
  Sample2,
  Sample3
}

// enumに関数を定義する。
namespace Sample {
  export function sampleMethod(sample: Sample): string {
    let message = '';
    switch (sample) {
      case Sample.Sample1:
        message = 'It\'s Sample1.';
        break;
      case Sample.Sample2:
        message = 'It\'s Sample2.';
        break;
      case Sample.Sample3:
        message = 'It\'s Sample3.';
        break;
      default:
        message = 'not found.';
        break;
    }
    return message;
  }
}

enum Sample2 {
  Sample1 = 'enum Sample1',
  Sample2 = 'enum Sample2',
  Sample3 = 'enum Sample3'
}

enum Sex {
  man,
  woman
}
