using System.Collections.Generic;
using System.Collections.ObjectModel;
using System;
using System.Windows.Input;
using CSE231_PrepTests;

namespace CSE231_PrepTest_Avalonia.ViewModels
{
    public class MainViewModel : ViewModelBase
    {
        public ICommand OpenFileButton { get; }
        public ObservableCollection<Person> person { get; set; }

        public MainViewModel()
        {
            OpenFileButton = new RelayCommand(OpenFileButton_Clicked);
            var people = new List<Person>
            {
                new Person("Neil", "Armstrong"),
                new Person("Buzz", "Lightyear"),
                new Person("James", "Kirk")
            };
            person = new ObservableCollection<Person>(people);
        }

        public void OpenFileButton_Clicked()
        {

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
