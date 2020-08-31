using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SetTexture : MonoBehaviour
{
    public Dictionary<string, byte[]> textureDictionary = new Dictionary<string, byte[]>();
    public List<GameObject> objects = new List<GameObject>();
    public List<Texture2D> textures = new List<Texture2D>();
    // Start is called before the first frame update
    void Start()
    {
        CreateTextures();
        SendTexture("1" + "," + Data.image);
        SendTexture("2" + "," + Data.image);
    }

    // Update is called once per frame
    void Update()
    {
        UpdateTextures();
    }
    
    public void CreateTextures() {
        int length = objects.Count;
        for (int i = 0; i < length; i++) {
            Texture2D texture = new Texture2D(512, 512);
            textures.Add(texture);
            GameObject obj = objects[i];
            Material m = obj.GetComponent<Renderer>().material;
            Debug.Log(m);
            m.mainTexture = texture;
        }
    }

    public void UpdateTextures() {
        int count = objects.Count;
        for (int i = 0; i < count; i++) {
            GameObject obj = objects[i];
            Texture2D texture = textures[i];
            if (obj == null || texture == null) return;
            string name = obj.name;
            bool containsName = textureDictionary.ContainsKey(name);
            if (!containsName) return;
            byte[] bTexture = textureDictionary[name];
            if (bTexture == null) return;
            texture.LoadImage(bTexture);
        }
    }

     public string SendTexture(string argsString) {
        string[] s = argsString.Split(',');
        List<string> args = new List<string>(s);
        if (args.Count != 2) return "Not Enough!";
        string id = args[0];
        string textureString = args[1];
        byte[] bTexture = System.Convert.FromBase64String(textureString);
        bool hasId = textureDictionary.ContainsKey(id);
        if (!hasId) textureDictionary.Add(id, bTexture);
        else textureDictionary[id] = bTexture; 
        return "Send Texture!";
    }
}
