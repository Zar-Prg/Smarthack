using System.Collections;
using System.Collections.Generic;
using UnityEditor.U2D.Aseprite;
using UnityEngine;
using UnityEngine.Rendering;

namespace Matei.json
{
    public class Quest
    {
        public int id;
        public string question;
        public string? description;
        public Answers answers;
        public bool multiple_correct_answers;
        public Answers_correct corect_answers;
        public string explanation;
        public object? tip;
        public Tags[] tags;
        public string? category;
        public string difficulty;
    }
    public class Answers
    {
        public string? answer_a;
        public string? answer_b;
        public string? answer_c;
        public string? answer_d;
        public string? answer_e;
        public string? answer_f;
    }
    public class Answers_correct
    {
        public bool? answer_a_correct;
        public bool? answer_b_correct;
        public bool? answer_c_correct;
        public bool? answer_d_correct;
        public bool? answer_e_correct;
        public bool? answer_f_correct;
    }
    public class Tags
    {
        public string? name;
    }
}
