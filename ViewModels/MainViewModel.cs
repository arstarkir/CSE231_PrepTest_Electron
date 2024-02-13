using System.Collections.Generic;
using System.Collections.ObjectModel;
using System;

namespace CSE231_PrepTest_Avalonia.ViewModels
{
    public class MainViewModel : ViewModelBase
    {
#pragma warning disable CA1822 // Mark members as static
        public string Greeting => "Welcome to Avalonia!";
#pragma warning restore CA1822 // Mark members as static
        public ObservableCollection<Person> person { get; set; }

        public MainViewModel()
        {
            var people = new List<Person>
            {
                new Person("Neil", "Armstrong"),
                new Person("Buzz", "Lightyear"),
                new Person("James", "Kirk")
            };
            person = new ObservableCollection<Person>(people);
        }
    }

    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public Person(string firstName, string lastName)
        {
            FirstName = firstName;
            LastName = lastName;
        }
    }
}
